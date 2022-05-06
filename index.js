const showDialogElement = document.getElementById('visualize');
showDialogElement.addEventListener("click", showDialog);

const showActionElement = document.getElementById('showActionButton');
showActionElement.addEventListener("click", showActionButton);

const hideActionElement = document.getElementById('hideActionButton');
hideActionElement.addEventListener("click", hideActionButton);

const primaryActionElement = document.getElementById('primaryButtonClass');
primaryActionElement.addEventListener("click", setActionClass);

const successActionElement = document.getElementById('successButtonClass');
successActionElement.addEventListener("click", setActionClass);

const dangerActionElement = document.getElementById('dangerButtonClass');
dangerActionElement.addEventListener("click", setActionClass);

let actionClass = '';

function setActionClass(e) {
	const element = $(e.currentTarget);
	actionClass = $(element).val();
}

function showActionButton() {
	$('#saveButtonText').show()
	$('[for="saveButtonText"]').show()
	$('.actionClass').show();
}

function hideActionButton() {
	$('#saveButtonText').hide()
	$('[for="saveButtonText"]').hide()
	$('.actionClass').hide();
}


function showDialog() {
	const dialogText = tinymce.get("dialogText").getContent();;
	const dialogTitle = document.getElementById('dialogTitle').value;
	const dialogType = $('#dialogType').val();
	
	let type = null
	if (dialogType == 'TYPE_DEFAULT')
		type = BootstrapDialog.TYPE_DEFAULT
	else if (dialogType == 'TYPE_INFO')
		type = BootstrapDialog.TYPE_INFO
	else if (dialogType == 'TYPE_PRIMARY')
		type = BootstrapDialog.TYPE_PRIMARY
	else if (dialogType == 'TYPE_SUCCESS')
		type = BootstrapDialog.TYPE_SUCCESS
	else if (dialogType == 'TYPE_WARNING')
		type = BootstrapDialog.TYPE_WARNING
	else if (dialogType == 'TYPE_DANGER')
		type = BootstrapDialog.TYPE_DANGER
	
	let buttons = [];
	
	buttons.push({
		label: 'Close',
                    action: function (dialogItself) {
                        dialogItself.close();
                    },
	});
	
	if ($("#saveButtonText").is(":visible")) {
		buttons.push({
			label: $('#saveButtonText').val(),
			cssClass: actionClass,
					action: function (dialogItself) {
						dialogItself.close();
					},
		});
	}
	
	BootstrapDialog.show({
				id:"mockupModal",
                title: dialogTitle,
                type: type,
                message: dialogText,
                buttons: buttons,
				onshown: function (dialog) {
					const modalWidth = $('#modalWidth').val();
					if (modalWidth) {
						$('#mockupModal').find('.modal-dialog').attr('style', `width:${modalWidth}% !important`)
					}
                    
                },
            });
  
}
