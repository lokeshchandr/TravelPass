// DOM Elements
const loginPage = document.getElementById('loginPage');
const adminDashboard = document.getElementById('adminDashboard');
const userDashboard = document.getElementById('userDashboard');

// Admin Actions
const connectWalletBtn = document.getElementById('connectWallet');
const uploadDocumentBtn = document.getElementById('uploadDocument'); // New button
const saveDocumentBtn = document.getElementById('saveDocument');
const generateMagicKeyBtn = document.getElementById('generateMagicKey');
const saveMagicKeyBtn = document.getElementById('saveMagicKey');

// User Actions
const connectWalletUserBtn = document.getElementById('connectWalletUser');
const checkDocumentBtn = document.getElementById('checkDocument');
const hashInput = document.getElementById('hashInput'); // New input
const verifyOutput = document.getElementById('verifyOutput');

// Functions to Toggle Dashboard Views
function showAdminDashboard() {
    loginPage.classList.add('hidden');
    adminDashboard.classList.remove('hidden');
}

function showUserDashboard() {
    loginPage.classList.add('hidden');
    userDashboard.classList.remove('hidden');
}

// Role Selection
document.getElementById('loginAsAdmin').addEventListener('click', showAdminDashboard);
document.getElementById('loginAsUser').addEventListener('click', showUserDashboard);

// Back Button Functionality
document.getElementById('backButtonAdmin').addEventListener('click', () => {
    adminDashboard.classList.add('hidden');
    loginPage.classList.remove('hidden');
});

document.getElementById('backButtonUser').addEventListener('click', () => {
    userDashboard.classList.add('hidden');
    loginPage.classList.remove('hidden');
});

// Placeholder Functions for Actions
uploadDocumentBtn.addEventListener('click', () => alert('Upload Document functionality here.'));
checkDocumentBtn.addEventListener('click', () => {
    const hash = hashInput.value;
    if (!hash) {
        verifyOutput.innerText = "Please enter a hash key!";
        return;
    }
    verifyOutput.innerText = `Checking document with hash: ${hash}`;
});
