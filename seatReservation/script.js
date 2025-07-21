let reservedSeats = {
    record1: {
        seat: 'B19',
        owner: {
            fname: 'Joe',
            lname: 'Smith',
            email: 'joesmith@gmail.com', 
            phone: '+12345676827'
        }
    },
    record2: {
        seat: 'B20',
        owner: {
            fname: 'Alison',
            lname: 'Johnson', 
            email: 'alisonjohnson@gmail.com', 
            phone: '+1729879819'
        }
    },
    record3: {
        seat: 'B21',
        owner: {
            fname: 'James',
            lname: 'Antony', 
            email: 'jamesant@gmail.com', 
            phone: '+7180987798'
        }
    },
    record4: {
        seat: 'B22',
        owner: {
            fname: 'Thomas',
            lname: 'Smith', 
            email: 'thomassm@gmail.com', 
            phone: '+0918984987'
        }
    }
};


function makeRows(sectionLength, rowLength, placement) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];

    let html = '';
    let counter = 1;

    rows.forEach(row => { 
        switch (placement) {
            case "left":
                html += `<div class = "row">`;
                html += `<div class = "label">${row}</div>`;
                break;
            case "right":
                html += `<div class = "row">`;
                counter = counter + (rowLength - sectionLength);
                break;
            default:
                html += `<div class = "row">`;
                counter = counter + ((rowLength - sectionLength) / 2); break;
        }

        for (let i = 0; i < sectionLength; i++){
            html += `<div class="seat" id="${row + counter}">${counter}</div>`;
            counter++;
        }

        switch (placement) {
            case "left":
                counter = counter + (rowLength - sectionLength);
                html += `</div>`;
                break;
            case "right":
                html += `<div class = "label">${row}</div>`;
                html += `</div>`;
                break;
            default:
                counter = counter + ((rowLength - sectionLength) / 2);
                html += `</div>`;
                break;
        }
    });

    document.getElementById(placement).innerHTML = html; 
}

makeRows(3, 15, 'left');
makeRows(3, 15, 'right');
makeRows(9, 15, 'middle');

(function () { 

    'use strict';
    for (const key in reservedSeats) {

        if (reservedSeats.hasOwnProperty(key)) {
            const obj = reservedSeats[key];
            
            document.getElementById(obj.seat).className = 'reserved';
            document.getElementById(obj.seat).innerHTML = 'R';
        }
    }

    let selectedSeats = [];
    const allSeats = document.querySelectorAll('.seat');

    allSeats.forEach(seat => {
        seat.addEventListener('click', () => {
            seatSelectionProcess(seat.id);
        });
    });

    function seatSelectionProcess(seat) {

        if (!document.getElementById(seat).classList.contains('reserved')) {
             const index = selectedSeats.indexOf(seat);

            if (index === -1) {

                selectedSeats.push(seat);
                document.getElementById(seat).className = 'selected';
            
            } else {

                selectedSeats.splice(index, 1);
                document.getElementById(seat).className = 'seat';
            } 

            if (selectedSeats.length > 0) {

                if (selectedSeats.length === 1) {
                    document.getElementById('txtcont').innerHTML = `<h3>Selected Seat</h3> <span id = num> ${selectedSeats[0]} </span>`;
                } else {
                    let seatString = selectedSeats.toString();
                    seatString = seatString.replace(/,/g, ', ');
                    seatString = seatString.replace(/,(?=[^,]*$)/, ' and');
                    document.getElementById('txtcont').innerHTML = `<h3>Selected Seats</h3> <span id = num> ${seatString} </span>`;   
                }
            } else {
                document.getElementById('txtcont').innerHTML = '<h3>Select Seat!</h3>';
            }
        }
    }  
    
    document.getElementById('openForm').addEventListener('click', manageConfirmForm);

    function manageConfirmForm() {

            if (selectedSeats.length > 0) {
                    document.getElementById('popup-form').classList.remove('hidden');
            } else {

                document.getElementById('txtcont').innerHTML = '<h3>Oopss..</h3> <p>You need to select atleast 1 seat. <a href = "#" id = "error"> Close</a> this error message and select some seats.</p>'

                document.getElementById('error').addEventListener('click', event => {
                    event.preventDefault();
                    document.getElementById('txtcont').innerHTML = '<h3>Select Seat!</h3>';
                });
            }
    }
    
    document.getElementById('closeForm').addEventListener('click', event => {
        event.preventDefault();
        document.getElementById('popup-form').className = 'hidden';
    });

    document.getElementById('reservationForm').addEventListener('submit', event=> { 
        event.preventDefault();
        processReservation();
    });

    function processReservation() {
        const hardCodeRecord = Object.keys(reservedSeats).length;
        const fname = document.getElementById('fname');
        const lname = document.getElementById('lname');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        let counter = 1;
        let nextRecord = '';

        selectedSeats.forEach(thisSeat => {
            document.getElementById(thisSeat).className = 'reserved';
            document.getElementById(thisSeat).innerHTML = 'R';

            nextRecord = `record${hardCodeRecord + counter}`;

            reservedSeats[nextRecord] = {
                seat: thisSeat,
                owner: {
                    fname: fname,
                    lname: lname, 
                    email: email,
                    phone: phone
                }
            }
            counter++;
        });
        clearThing();
    }

    function clearThing() {
        document.getElementById('popup-form').className = 'hidden';
        document.getElementById('txtcont').innerHTML = '<h3>Select Seat!</h3>';
        selectedSeats = [];
    }
}());