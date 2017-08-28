'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var FIREBALL_WRAP = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');

var getWizardName = function () {
  var rand = Math.floor(Math.random() * WIZARD_NAMES.length);
  return (WIZARD_NAMES[rand]);
};

var getWizardSurname = function () {
  var rand = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  return (WIZARD_SURNAMES[rand]);
};

var getWizardCoatColor = function () {
  var rand = Math.floor(Math.random() * COAT_COLORS.length);
  return (COAT_COLORS[rand]);
};

var getWizardEyesColor = function () {
  var rand = Math.floor(Math.random() * EYES_COLORS.length);
  return (EYES_COLORS[rand]);
};

var getFireballWrapColor = function () {
  var rand = Math.floor(Math.random() * FIREBALL_WRAP.length);
  return (FIREBALL_WRAP[rand]);
};

var wizards = [
  {
    name: getWizardName() + ' ' + getWizardSurname(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizardEyesColor()
  },
  {
    name: getWizardName() + ' ' + getWizardSurname(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizardEyesColor()
  },
  {
    name: getWizardName() + ' ' + getWizardSurname(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizardEyesColor()
  },
  {
    name: getWizardName() + ' ' + getWizardSurname(),
    coatColor: getWizardCoatColor(),
    eyesColor: getWizardEyesColor()
  }
];

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
var setupWizard = setup.querySelector('.setup-wizard');
var wizard = setup.querySelector('.wizard');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var fireballWrap = setup.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupSubmit.addEventListener('click', function () {
  closePopup();
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getWizardCoatColor();
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getWizardEyesColor();
});

fireballWrap.addEventListener('click', function () {
  fireballWrap.style.backgroundColor = getFireballWrapColor();
});
