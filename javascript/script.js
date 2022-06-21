let buffer = '';

$(function() {
    $(document).on("click",'#addButton' ,function(e) {
            buffer = $(".body:first").clone()
            $(buffer).prepend('<div class="verticalLine border">|</div>').insertAfter('.body:last');

    })
})

$(document).on('click','.deleteBtn', function (e) {
    this.closest('.body').remove()
})

$(document).on('click','.container-fluid h1', function(e) {
    $('.container-fluid').append('<div class="body"><div class="flowchart-comp border"><i class="fa-solid deleteBtn fa-trash-can"></i><input type="text" name="content" id="content" placeholder="Enter text here" class="flowchart-text"></div><div class="verticalLine border">|</div><div class="addButton border" id="addButton">+</div></div>')
})
