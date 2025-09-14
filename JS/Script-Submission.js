document.addEventListener('DOMContentLoaded', () => {
    const submissionForm = document.getElementById('submissionForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const titleInput = document.getElementById('title');
    const titleError = document.getElementById('titleError');
    const descriptionInput = document.getElementById('description');
    const descriptionError = document.getElementById('descriptionError');
    const tagsInput = document.getElementById('tags');
    const tagsError = document.getElementById('tagsError');
    const uploadFileInput = document.getElementById('uploadFile');
    const uploadFileError = document.getElementById('uploadFileError');
    const aiRadioButtons = document.querySelectorAll('input[name="aiGenerated"]');
    const aiRadioError = document.getElementById('aiRadioError');

    function showError(element, message, errorSpan) {
        element.classList.add('invalid');
        errorSpan.innerHTML = `<img src="../Asset/Picture/exclamation.png" alt="!" class="exclamation-mark"> ${message}`;
        errorSpan.classList.add('visible');
    }

    function hideError(element, errorSpan) {
        element.classList.remove('invalid');
        errorSpan.textContent = '';
        errorSpan.classList.remove('visible');
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        if (email.length < 5) {
            showError(emailInput, 'Email must be at least 5 characters.', emailError);
            return false;
        }
        if (!email.includes('@gmail.com')) {
            showError(emailInput, 'Email must contain @gmail.com', emailError);
            return false;
        }
        hideError(emailInput, emailError);
        return true;
    }

    function validateTitle() {
        const title = titleInput.value.trim();
        if (title === '') {
            showError(titleInput, 'Title is required', titleError);
            return false;
        }
        hideError(titleInput, titleError);
        return true;
    }

    function validateDescription() {
        const description = descriptionInput.value.trim();
        if (description.length < 5) {
            showError(descriptionInput, 'Description must be at least 5 characters', descriptionError);
            return false;
        }
        hideError(descriptionInput, descriptionError);
        return true;
    }

    function validateTags() {
        const tags = tagsInput.value.trim();
        if (tags === '') {
            showError(tagsInput, 'Must at least 1 tag', tagsError);
            return false;
        }
        hideError(tagsInput, tagsError);
        return true;
    }

    function validateUploadFile() {
        if (uploadFileInput.files.length === 0) {
            showError(uploadFileInput, 'Please upload an image file', uploadFileError);
            return false;
        }
        const file = uploadFileInput.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            showError(uploadFileInput, 'Only JPG, PNG, GIF files are allowed', uploadFileError);
            return false;
        }
        hideError(uploadFileInput, uploadFileError);
        return true;
    }

    function validateAIRadio() {
        let isSelected = false;
        for (const radio of aiRadioButtons) {
            if (radio.checked) {
                isSelected = true;
                break;
            }
        }
        if (!isSelected) {
            showError(aiRadioButtons[0], 'Select one', aiRadioError);
            return false;
        }
        hideError(aiRadioButtons[0], aiRadioError);
        return true;
    }

    submissionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail();
        const isTitleValid = validateTitle();
        const isDescriptionValid = validateDescription();
        const isTagsValid = validateTags();
        const isUploadFileValid = validateUploadFile();
        const isAIRadioValid = validateAIRadio();

        if (isEmailValid && isTitleValid && isDescriptionValid && isTagsValid && isUploadFileValid && isAIRadioValid) {
            alert('Form submitted successfully!');
            submissionForm.reset();
        } else {
            const firstInvalidElement = document.querySelector('.invalid');
            if (firstInvalidElement) {
                firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    emailInput.addEventListener('input', validateEmail);
    titleInput.addEventListener('input', validateTitle);
    descriptionInput.addEventListener('input', validateDescription);
    tagsInput.addEventListener('input', validateTags);
    uploadFileInput.addEventListener('change', validateUploadFile);
    aiRadioButtons.forEach(radio => radio.addEventListener('change', validateAIRadio));

});