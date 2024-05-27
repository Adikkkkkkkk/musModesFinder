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

// Root Notes btns
const rootNotesBtns = document.querySelectorAll('.root-note');
// MusModes btns
const musModeBtns = document.querySelectorAll('.musmode');
const antidepressantBox = document.querySelector('.majmin');
// Check for root note
let rootNote = '';
let musMode = '';
let octaves = document.querySelectorAll('.octave');

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

// MusMode Picking Script ============================
musModeBtns.forEach(musModeBtn => {
	musModeBtn.addEventListener('click', function (e) {
		if (rootNote === '') {
			alert('Выбери тональность!');
		} else {
			musMode = musModeBtn.id;
			musModeBtn.classList.add('active-mode');
			// WORK
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
				musModeArr.push(notes[modeCounter]);
				modeCounter += musModes[`${musMode}`][i];
			}

			// @@@@@@@@@@@@@@@ create arr with mode notes

			// emphasize each note in mode ==================

			resetModes();
			octaves.forEach(octave => {
				let keys = octave.querySelectorAll('.key');
				keys.forEach(key => {
					if (
						musModeArr.includes(key.innerText.toLowerCase()) &&
						key.innerText.toLowerCase() !== rootNote
					) {
						key.style.backgroundColor = '#ffe548';
					} else if (key.innerText.toLowerCase() === rootNote) {
						key.style.backgroundColor = '#ff4b3e';
					}
				});
			});

			// ================== emphasize each note in mode
			// WORK
			musModeBtns.forEach(musModeBtnInner => {
				if (musModeBtnInner !== musModeBtn) {
					musModeBtnInner.classList.remove('active-mode');
				}
			});
			function resetModes() {
				octaves.forEach(octave => {
					let keys = octave.querySelectorAll('.key');
					keys.forEach(key => {
						if (key.classList.contains('key-black')) {
							key.style.backgroundColor = '#000';
							console.log(key);
						} else {
							key.style.backgroundColor = '#fff';
						}
					});
				});
			}
		}
	});
});
// ============================ MusMode Picking Script
