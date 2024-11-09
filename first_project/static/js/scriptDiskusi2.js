// Untuk membuat pesan terkirim berada pada chat box ketika mengetikkan pesan dan mengirimnya bagi pengguna, 
// serta menampilkan avatar/foto profil pengguna

$(document).ready(function() {
    $('#sendButton').click(function() {
        var message = $('#messageInput').val(); 
        if (message.trim() !== '') {
            var messagebox = `
                <div class="d-flex justify-content-end mb-3">
                    <div class="chat text-dark p-2 rounded me-2">
                        ${message}
                    </div>
                    <img src="/picAsset/avatar2.png" alt="Foto Pelajar" class="rounded-circle" width="50" height="50">
                </div> 
            `; 
            $('.chat-box').append(messagebox);
            $('#messageInput').val('');
            $('.chat-box').scrollTop($('.chat-box')[0].scrollHeight);
        }
    });

    $('#messageInput').keypress(function(e) {
        if (e.which == 13) {
            $('#sendButton').click();
        }
    });
});