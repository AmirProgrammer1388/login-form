$(document).ready(function(){
    $('.forgot').click(function(){
        $('.step11').hide()
        $('.step12').show()
    })
    $(".cancelbtn-h").click(function(){
        $('.step11').show()
        $('.step12').hide()
    })
    $('.new-user').click(function(){
        $('.step11').hide()
        $('.step12').hide()
        $('.step13').show()
    })
    $(".close-13").click(function(){
        $('.step11').show()
        $('.step13').hide()
    })
    $(".change-pas").click(function(){
        Swal.fire(
            'رمز شما با موفقیت تغییر یافت',
            '',
            'success'
        )
    })
    $(".sumbit-2").click(function(){
        Swal.fire(
            'حساب شما با موفقیت ساخته شد',
            '',
            'success'
        )
    })
})