// // click()
// $('h1').click(function(){
//     console.log('There was a Click!')
// })

// $('li').click(function(){
//     console.log("now also!")
// })


// // using this
// $('h1').click(function(){
//     $(this).text('I was Changed!')
// })


// // using keypress
// $('input').eq(0).keypress(function(){
//     $('h3').toggleClass('turnBlue')
// })

// $('input').eq(0).keypress(function(event){
//     if(event.which === 13){
//         $('h3').toggleClass
//     }
// })

// // on() ( nothing but a 'addEventListner in vanilla')

// $('h1').on('dblclick', function(){
//     $(this).toggleClass('turnBlue')
// })

// $('h1').on('mouseenter', function(){
//     $(this).toggleClass('turnBlue')
// })



// // FadeOut animation
// $('input').eq(1).on('click',function(){
//     $('.container').fadeOut(3000)
// })

// // SlideUp animation
$('input').eq(1).on('click',function(){
    $('.container').slideUp(3000)
})