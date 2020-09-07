$(document).ready(function () {

    //Замена текста в инпут с файлом
    $('.input-file').each(function () {
        var $input = $(this),
            $label = $input.next('.fileName'),
            labelVal = $label.html();

        $input.on('change', function (element) {
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').html(fileName) : $label.removeClass('has-file').html(labelVal);
        });
    });

    $('.input-file-download').each(function () {
        var $input = $(this),
            $label = $input.next('.fileName'),
            labelVal = $label.html();

        $input.on('change', function (element) {
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').html(fileName) : $label.removeClass('has-file').html(labelVal);
        });
    });

    //=================================================================================================

    // SelectBox
    var selectBox = $('.icon[data-select]');
    selectBox.each(function(){
        icon = $(this);

        icon.on('click', function(){
            parent = $(this).parents('.selectBox');
            trueSelect = parent.find('.trueSelect option');
            selected =  parent.find('.selected');
            
            show = parent.find('.show');
            showSpan = parent.find('.show span');
            showHeight = showSpan.innerHeight() * showSpan.length + 40;
            
            parent.toggleClass('active');
            show.toggleClass('active');
            if(show.hasClass('active')){
                show.css({'height': showHeight});
            } else{
                show.css({'height': 0});
            }

            show.on('click', 'span', function(){
                text = $(this).text();
                selected.text(text);
                trueSelect.val(text).text(text);
                parent.find('.icon[data-select]').trigger('click');
            })            
        })
    })

    //=================================================================================================

    // Plus & Minus Inputs

    var $quantityArrowMinus = $(".inputNumber .minus");
    var $quantityArrowPlus = $(".inputNumber .plus");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      var $quantityNum = $(this).siblings('.number');
      if ($quantityNum.val() > 0) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      var $quantityNum = $(this).siblings('.number');
      $quantityNum.val(+$quantityNum.val() + 1);
    }


    //=================================================================================================
    // Registation tabs
    var tabsReg = $('.tabs.reg button'),
        formReg = $('.formReg');

        tabsReg.each(function(){
            $(this).on('click', function(){
                data = $(this).data('tab');

                $('.tabs button').removeClass('active');
                $(this).addClass('active');
                formReg.data('tab', data).toggleClass('active');
            })
        })
    
    //=================================================================================================

    // Registration steps
    var cbtnNext = $('.cbtn[data-step]'),
        cbtnBack = $('.cbtn[data-step-back]');    
    
    cbtnNext.each(function(){
        $(this).on('click', function(){
            parent = $(this).parents('.steps');
            nextStep = parent.next();

            parent.removeClass('active');
            nextStep.addClass('active');
        })
    })
    cbtnBack.each(function(){
        $(this).on('click', function(){
            parent = $(this).parents('.steps');
            backStep = parent.prev();

            parent.removeClass('active');
            backStep.addClass('active');
        })
    })

    //=================================================================================================

    // Add organisation

    var addOrganisation = $('.addOrganisation'),
        blockOrganisation = $('.blockOrganisation'),
        org = $('.blockOrganisation .label'),
        cloneFix = org.clone();

    addOrganisation.each(function(){
        $(this).on('click', function(){
            clone = cloneFix.clone();
            id = new Date().getUTCMilliseconds();
            cloneInput = clone.find('.input').attr({
                'name': 'org-' + id
            });
            blockOrganisation.append(clone);
        })
    })
});


