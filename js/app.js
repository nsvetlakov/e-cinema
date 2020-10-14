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
    function selectBox() {    
        var selectBox = $('.icon[data-select]');
        selectBox.each(function(){
            icon = $(this);

            icon.on('click', function(){
                console.log($(this));
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
    }
    selectBox();

    function resetSelect(){
        var selectBox = $('.icon[data-select]');
        selectBox.each(function(){
            icon = $(this);
            icon.unbind( "click" );
        })
    }

    //=================================================================================================

    // Plus & Minus Inputs
    function plusAndMinus() {
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
    }
    plusAndMinus();
    function resetPlusAndMinus(){
        var $quantityArrowMinus = $(".inputNumber .minus");
        var $quantityArrowPlus = $(".inputNumber .plus");
    
        $quantityArrowMinus.unbind( "click" );
        $quantityArrowPlus.unbind( "click" );
    }
    //=================================================================================================
    // Registation tabs
    var tabsReg = $('.tabs.reg button')
        
        tabsReg.each(function(){
            $(this).on('click', function(){
                data = $(this).data('tab');
                formReg = $('.formReg');

                $('.tabs button').removeClass('active');
                $(this).addClass('active');
                formReg.each(function(){
                    formRegData = $(this).data('tab');
                    if(formRegData == data){
                        formReg.removeClass('active');
                        $(this).addClass('active');
                    }
                });
            });
        });
    

        var tabs = $('.tabs button');       

        tabs.each(function(){
            $(this).on('click', function(){
                data = $(this).data('tab');
                getTab = $('.getTab');
                
                $('.tabs button').removeClass('active');
                $(this).addClass('active');
                getTab.each(function(){
                    getTabData = $(this).data('tab');
                    if(getTabData == data){
                        getTab.removeClass('active')
                        $(this).addClass('active')
                    }
                })
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
            });
        });
    
    //=================================================================================================
    //Add country

    var addCountry = $('.addCountry'),
        countryBlock = $('.countryBlock'),
        row = $('.countryBlock .row'),
        rowCloneFix = row.clone();

        addCountry.each(function(){
        $(this).on('click', function(){
            
            clone = rowCloneFix.clone();
            id = new Date().getUTCMilliseconds();
            cloneSelect = clone.find('.trueSelect').attr({
                'name': 'select-' + id
            });
            cloneNumber = clone.find('.number').attr({
                'name': 'count-visitor-' + id
            });

            countryBlock.append(clone);

            resetSelect();
            selectBox();

            resetPlusAndMinus()
            plusAndMinus();
           
        })
    })

    //=================================================================================================
    //Add table tr
    var addTableTr = $('.addTableTr'),
        addTable = $('.addTable'),
        mainTable = $('.mainTable');
        cloneTr = addTable.find('.clone');
        clone = cloneTr.clone();

    addTableTr.on('click', function(){
        presentTrClone = addTable.find('.clone');
        addTbody = addTable.find('tbody');
        mainTbody = mainTable.find('tbody');

        inputs = cloneTr.find('input');

        inputs.each(function(){
            input = $(this);
            if(input.val() == ""){
                input.addClass('empty')
            }else{
                input.removeClass('empty')
                text = input.val();
                input.parent().text(text);

                if(input.val() != ""){
                    cloneTr.remove();
                    addTbody.append(clone);
                    mainTbody.append(presentTrClone)
                }


            }


        })

    })

    //================================================================================================= 
    // Header Search 
    var searchBlock = $('.searchBlock'),
        search = searchBlock.find('.icon-search'),
        searchClose =  searchBlock.find('.icon-close');

        if(searchBlock.width() <= 40){
            search.on('click', function(){
                searchBlock.addClass('active');
                if(searchBlock.hasClass('active')){
                    searchClose.on('click', function(){
                        searchBlock.removeClass('active');
                    });
                }
            });
        }

    //=================================================================================================
    // Tabs
    var tabs = $('.tabs button'),    
        innerTabs = $('.innerTabs button');    

        tabs.each(function(){
            $(this).on('click', function(){
                data = $(this).data('tab');
                getTab = $('.getTab');
                
                tabs.removeClass('active');
                $(this).addClass('active');
                getTab.each(function(){
                    getTabData = $(this).data('tab');
                    if(getTabData == data){
                        getTab.removeClass('active')
                        $(this).addClass('active')
                    }
                })
            })
        });
        innerTabs.each(function(){
            $(this).on('click', function(){
                data = $(this).data('inner-tab');
                getInnerTab = $('.getInnerTab');
                
                innerTabs.removeClass('active');
                $(this).addClass('active');
                getInnerTab.each(function(){
                    getInnerTabData = $(this).data('inner-tab');
                    if(getInnerTabData == data){
                        getInnerTab.removeClass('active')
                        $(this).addClass('active')
                    }
                })
            })
        });

        
    //=================================================================================================
    // ShowHide Block

    var showHideBtn = $('.showHideBtn');
        showHide = $(".showHide");
        showHideHeight = showHide.height();

        showHide.css({'height': showHideHeight});

    showHideBtn.each(function(){
        $(this).on('click', function(){
            $(this).toggleClass('active');
            showHide.toggleClass('active');
        })
    })
    
     //=================================================================================================
    // Modal
        var cbtn = $('.cbtn[data-modal]'),
            modalBlock = $('.modalBlock'),
            modal = modalBlock.find('.modal'),
            closeModal =  modalBlock.find('*[close]');

        cbtn.each(function(){
            $(this).on('click', function(){
                data = $(this).data('modal');

                modal.each(function(){
                    dataModal = $(this).data('modal');

                    if(dataModal == data){
                        modalBlock.addClass('active');
                        $(this).addClass('active');
                    }
                    console.log( dataModal )
                })
            })
        })

        closeModal.on('click', function(){
            modalBlock.removeClass('active');
            modal.removeClass('active');
        })
    
    
    
});


    // var progress = 30; 
    // var progressEl = document.querySelector('.progress'); 
    // function increaseProgress() { 
    //     if( progress == 180){
    //         progress = 180;
    //     }
    //     else{
    //         progress = progress + 10; 
    //         progressEl.style.transform = 'rotate('+progress+'deg)'; 
    //     }
    // } 

