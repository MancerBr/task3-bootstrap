import $ from 'jquery'
$('#viewDetails').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget);
    const srcIng = button.data('whatever');
    const detailsText = button.parent().parent().next().html();
    const modalHeaderText = button.parent().parent().parent().find('.book').text();
    const modal = $(this);
    modal.find('.modal-title').text(modalHeaderText);
    modal.find('.modal-img').attr('src', srcIng);
    modal.find('.text-modal').html(detailsText);
});