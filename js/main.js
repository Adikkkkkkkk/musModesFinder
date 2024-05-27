'use strict';

const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
const musModes = {
	lydian: [2, 2, 2, 1, 2, 2, 1],
	ionian: [2, 2, 1, 2, 2, 2, 1],
	mixolydian: [2, 2, 1, 2, 2, 1, 2],
	dorian: [2, 1, 2, 2, 2, 1, 2],
	aeolian: [2, 1, 2, 2, 1, 2, 2],
	phrydian: [1, 2, 2, 2, 1, 2, 2],
	locrian: [1, 2, 2, 1, 2, 2, 2],
};

// Tunings btns
const tuningBtns = document.querySelectorAll('.tuning');
// Root Notes btns
const rootNotesBtns = document.querySelectorAll('.root-note');
// MusModes btns
const musModeBtns = document.querySelectorAll('.musmode');
const antidepressantBox = document.querySelector('.majmin');

// Strings array
const guitarStrings = document.querySelectorAll('.guitar-string');
// Count index of the notes array
let notesCounter = 0;
// Check if tuning was picked
let guitarTuning = '';
// Check if root note was picked
let rootNote = '';

// Tuning Picking script ===========================

tuningBtns.forEach(tuningBtn => {
	tuningBtn.addEventListener('click', function (e) {
		e.preventDefault();

		// MAIN WORK ========================
		// Standart
		if (tuningBtn.id === 'standart') {
			resetTuning();
			guitarTuning = `${tuningBtn.id}`;
			tuningBtn.classList.add('active-mode');
			// Count strings
			for (let i = 0; i < guitarStrings.length; i++) {
				let frets;
				// first string
				if (i === 0) {
					notesCounter = 4;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// second string
				else if (i === 1) {
					notesCounter = 11;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// third string
				else if (i === 2) {
					notesCounter = 7;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// fourth string
				else if (i === 3) {
					notesCounter = 2;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// fifth string
				else if (i === 4) {
					notesCounter = 9;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// fifth string
				else if (i === 5) {
					notesCounter = 4;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
			} /* Count strings */
		} /* Standart */
		// Drop D
		if (tuningBtn.id === 'drop-d') {
			resetTuning();
			guitarTuning = `${tuningBtn.id}`;
			tuningBtn.classList.add('active-mode');
			// Count strings
			for (let i = 0; i < guitarStrings.length; i++) {
				let frets;
				// first string
				if (i === 0) {
					notesCounter = 4;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// second string
				else if (i === 1) {
					notesCounter = 11;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// third string
				else if (i === 2) {
					notesCounter = 7;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// fourth string
				else if (i === 3) {
					notesCounter = 2;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// fifth string
				else if (i === 4) {
					notesCounter = 9;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// fifth string
				else if (i === 5) {
					notesCounter = 2;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
			} /* Count strings */
		} /* Drop D */
		// C tuning
		if (tuningBtn.id === 'c-tuning') {
			resetTuning();
			guitarTuning = `${tuningBtn.id}`;
			tuningBtn.classList.add('active-mode');
			// Count strings
			for (let i = 0; i < guitarStrings.length; i++) {
				let frets;
				// first string
				if (i === 0) {
					notesCounter = 0;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// second string
				else if (i === 1) {
					notesCounter = 7;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// third string
				else if (i === 2) {
					notesCounter = 3;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// fourth string
				else if (i === 3) {
					notesCounter = 10;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// fifth string
				else if (i === 4) {
					notesCounter = 5;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
				// fifth string
				else if (i === 5) {
					notesCounter = 0;
					frets = guitarStrings[i].querySelectorAll('.fret');
					for (let j = 0; j < frets.length; j++) {
						notesCounter = notesCounter >= notes.length ? 0 : notesCounter;

						const point = document.createElement('div');
						point.classList.add('point');
						point.textContent = `${notes[notesCounter].toUpperCase()}`;

						frets[j].appendChild(point);
						notesCounter++;
					}
				}
			} /* Count strings */
		} /* C tuning */

		// MAIN WORK =========================

		// remove other non active btns
		tuningBtns.forEach(tuningBtnInner => {
			if (tuningBtnInner !== tuningBtn) {
				tuningBtnInner.classList.remove('active-mode');
			}
		});
		//  remove other non active btns
	});
});

// @@@@@@@@@@@@
function resetTuning() {
	guitarTuning = '';
	tuningBtns.forEach(tuningBtn => {
		tuningBtn.classList.remove('active-mode');
	});

	// Remove points from all frets
	for (let i = 0; i < guitarStrings.length; i++) {
		let points = guitarStrings[i].querySelectorAll('.fret .point');
		points.forEach(point => point.remove());
	}
}
// @@@@@@@@@@@

// ======================== Tuning Picking

// Root Note Picking script ========================

rootNotesBtns.forEach(rootNoteBtn => {
	rootNoteBtn.addEventListener('click', function (e) {
		rootNote = `${rootNoteBtn.innerText.toLowerCase()}`;
		rootNoteBtn.classList.add('active-mode');
		rootNotesBtns.forEach(rootNoteBtnInner => {
			if (rootNoteBtnInner !== rootNoteBtn) {
				rootNoteBtnInner.classList.remove('active-mode');
			}
		});
	});
});

// ======================== Root Note Picking script

// MusMode script ===================================
musModeBtns.forEach(musModeBtn => {
	musModeBtn.addEventListener('click', function (e) {
		e.preventDefault();
		if (guitarTuning === '') {
			alert('Выбери строй!');
		} else if (rootNote === '') {
			alert('Выбери тональность!');
		} else {
			// work ================================
			resetModes();
			let musMode = musModeBtn.id;
			musModeBtn.classList.add('active-mode');

			// --------------------------- MusMode MajorMinor
			switch (musMode) {
				case 'lydian':
					antidepressantBox.innerText = 'major';
					break;
				case 'ionian':
					antidepressantBox.innerText = 'major';
					break;
				case 'mixolydian':
					antidepressantBox.innerText = 'major';
				case 'dorian':
					antidepressantBox.innerHTML = `<p>minor</p> <p>major</p>`;
				case 'aeolian':
					antidepressantBox.innerText = `minor`;
				case 'phrydian':
					antidepressantBox.innerText = `minor`;
				case 'locrian':
					antidepressantBox.innerText = `minor`;
			}
			// MusMode MajorMinor ---------------------------

			// create arr with mode notes @@@@@@@@@@@@@@@
			const musModeArr = [];
			let modeCounter = notes.indexOf(rootNote);
			for (let i = 0; i < 8; i++) {
				modeCounter = modeCounter > 11 ? modeCounter - 12 : modeCounter;
				console.log(modeCounter);
				musModeArr.push(notes[modeCounter]);
				modeCounter += musModes[`${musMode}`][i];
				// console.log(musModes[`${musMode}`][i]);
			}
			console.log(musModeArr);

			// @@@@@@@@@@@@@@@ create arr with mode notes
			// Back Loop for strings
			for (let s = guitarStrings.length - 1; s >= 0; s--) {
				let frets = guitarStrings[s].querySelectorAll('.fret');
				// Loop for frets check
				for (let f1 = 0; f1 < frets.length; f1++) {
					let p1 = frets[f1].querySelector('.point');

					if (
						musModeArr.includes(p1.innerText.toLowerCase()) &&
						p1.innerText.toLowerCase() !== rootNote
					) {
						p1.style.backgroundColor = '#ffe548';
					} else if (p1.innerText.toLowerCase() === rootNote) {
						p1.style.backgroundColor = '#ff4b3e';
					}
				}
				// Loop for frets check
			}
			// Back Loop for strings
			// standart tune

			musModeBtns.forEach(musModeBtnInner => {
				if (musModeBtnInner !== musModeBtn) {
					musModeBtnInner.classList.remove('active-mode');
				}
			});
			// ================================= work
		}
		// Reset Function @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		function resetModes() {
			for (let i = 0; i < guitarStrings.length; i++) {
				let frets = guitarStrings[i].querySelectorAll('.fret');
				frets.forEach(fret => {
					let p = fret.querySelector('.point');

					p.style.backgroundColor = '#a7bbec';
				});
			}
		}
		// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Reset Function
	});
});
// =================================== MusMode script
