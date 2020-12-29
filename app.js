$(function(){
    $('.btn-add').click(function(){
        let noteBox = '<div class="note-single"><textarea placeholder="Digite sua nova anotação..."></textarea></div>';
        $('.container-note').append(noteBox);
    })
})