// ==UserScript==
// @name         Coleta Geral
// @namespace    https://br114.tribalwars.com.br
// @version      1.3
// @description  Vodkazera
// @author       Vodkazera
// @include https://br*.tribalwars.com.br/*mode=scavenge*
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// @step {gameUrl}/game.php?&screen=place&mode=scavenge
// ==/UserScript==

(function () {
    'use strict';
    var vodkazeraTW = TribalWars.getGameData();
    var tag = vodkazeraTW.world + '' + vodkazeraTW.player.name + '' + vodkazeraTW.screen + '_' + vodkazeraTW.mode;
    var valorIndefinido = 0;
    var nLoop = 1;
    unsafeWindow.window.name = tag;

    if (unsafeWindow.window.name === tag) {
        iniciar();
        loop(5);
        recarregar(60);
    }
    function iniciar() {
        logica();
    }

    function aleatorio(menor, maior) {
        var intervalo = Math.round(maior - menor);
        return Math.floor(Math.random() * intervalo) + menor + Timing.offset_to_server;
    }

    //Loop no inicar a cada X segundos. nLoop = 0 para o loop
    function loop(segundos) {
        var timer = setInterval(function () {
            if (nLoop === 0) {
                clearInterval(timer);
            }
            else {
                setTimeout(function () {
                    iniciar();
                }, aleatorio(segundos * 1000 * 0.01, segundos * 1000 * 0.10));
            }
        }, segundos * 1000);
    }

    //Recarrega a pagina a cada X minutos
    function recarregar(minutos) {
        setInterval(function () {
            setTimeout(function () {
                window.location.reload();
            }, aleatorio(minutos * 60000 * 0.01, minutos * 60000 * 0.10));
        }, minutos * 60000);
    }

    function selecionarTropas(botoesDisponiveis) {
        if (botoesDisponiveis > 0) {
            if (botoesDisponiveis == 4) {

                if (buscarTotalDeTropas(modeloUtilizado().lanceiro) >= qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().lanceiro)) {
                    assumirControleDoInput(modeloUtilizado().lanceiro).value = '';
                    assumirControleDoInput(modeloUtilizado().lanceiro).value = qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().lanceiro);
                    assumirControleDoInput(modeloUtilizado().lanceiro).dispatchEvent(new KeyboardEvent('keyup', { 'key': '0' }));

                }
                else if (buscarTotalDeTropas(modeloUtilizado().barbaro) >= qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().barbaro)) {
                    assumirControleDoInput(modeloUtilizado().barbaro).value = '';
                    assumirControleDoInput(modeloUtilizado().barbaro).value = qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().barbaro);
                    assumirControleDoInput(modeloUtilizado().barbaro).dispatchEvent(new KeyboardEvent('keyup', { 'key': '0' }));
                }


            }
            else if (botoesDisponiveis == 3) {

                if (buscarTotalDeTropas(modeloUtilizado().lanceiro) >= qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().lanceiro)) {
                    assumirControleDoInput(modeloUtilizado().lanceiro).value = '';
                    assumirControleDoInput(modeloUtilizado().lanceiro).value = qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().lanceiro);
                    assumirControleDoInput(modeloUtilizado().lanceiro).dispatchEvent(new KeyboardEvent('keyup', { 'key': '0' }));

                }
                else if (buscarTotalDeTropas(modeloUtilizado().barbaro) >= qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().barbaro)) {
                    assumirControleDoInput(modeloUtilizado().barbaro).value = '';
                    assumirControleDoInput(modeloUtilizado().barbaro).value = qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().barbaro);
                    assumirControleDoInput(modeloUtilizado().barbaro).dispatchEvent(new KeyboardEvent('keyup', { 'key': '0' }));
                }


            }
            else if (botoesDisponiveis == 2) {

                if (buscarTotalDeTropas(modeloUtilizado().lanceiro) >= qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().lanceiro)) {
                    assumirControleDoInput(modeloUtilizado().lanceiro).value = '';
                    assumirControleDoInput(modeloUtilizado().lanceiro).value = qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().lanceiro);
                    assumirControleDoInput(modeloUtilizado().lanceiro).dispatchEvent(new KeyboardEvent('keyup', { 'key': '0' }));

                }
                else if (buscarTotalDeTropas(modeloUtilizado().barbaro) >= qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().barbaro)) {
                    assumirControleDoInput(modeloUtilizado().barbaro).value = '';
                    assumirControleDoInput(modeloUtilizado().barbaro).value = qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().barbaro);
                    assumirControleDoInput(modeloUtilizado().barbaro).dispatchEvent(new KeyboardEvent('keyup', { 'key': '0' }));
                }

            }
            else {
                if (buscarTotalDeTropas(modeloUtilizado().lanceiro) >= qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().lanceiro)) {
                    assumirControleDoInput(modeloUtilizado().lanceiro).value = '';
                    assumirControleDoInput(modeloUtilizado().lanceiro).value = qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().lanceiro);
                    assumirControleDoInput(modeloUtilizado().lanceiro).dispatchEvent(new KeyboardEvent('keyup', { 'key': '0' }));

                }
                else if (buscarTotalDeTropas(modeloUtilizado().barbaro) >= qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().barbaro)) {
                    assumirControleDoInput(modeloUtilizado().barbaro).value = '';
                    assumirControleDoInput(modeloUtilizado().barbaro).value = qtdTropasDeAcordoComBotoes(botoesDisponiveis, modeloUtilizado().barbaro);
                    assumirControleDoInput(modeloUtilizado().barbaro).dispatchEvent(new KeyboardEvent('keyup', { 'key': '0' }));
                }
            }
        }

        return Number(assumirControleDoInput(modeloUtilizado().lanceiro).value) + Number(assumirControleDoInput(modeloUtilizado().barbaro).value);


    }

    function timeOver() {
        var tempo = document.getElementsByClassName('return-countdown');
        var lRecarregar = false;
        for (var i = 0; i < 4; i++) {
            if (tempo[i] !== undefined && parseInt(tempo[i].innerText.split(":")[1]) < 1) {
                lRecarregar = true;
            }
        }
        if (lRecarregar) {
            recarregar(2);
        }
    }

    function logica() {
        var btns = buscarObjeto("a.btn.btn-default.free_send_button:not(.btn-disabled)");
        var disp;
        var qtdTropas = 0;
        if (btns == undefined) {
            valorIndefinido++;
            if (valorIndefinido > 2) {
                document.getElementById('village_switch_right').click();

            }
        }
        else if (btns !== undefined) {
            disp = btnsDisponiveis(btns);
            if (disp.cont > 0) {
                qtdTropas = selecionarTropas(disp.cont);
                if (qtdTropas < 10) {
                    document.getElementById('village_switch_right').click();
                } else {
                    setTimeout(function () { disp.btn.click(); }, 3000);
                }
            }
        }
        timeOver();
    }


    function modeloUtilizado() {
        var modelo = new Object();


        modelo.lanceiro = 'spear';
        modelo.barbaro = 'axe';

        return modelo;
    }

    function assumirControleDoInput(item) {
        return document.getElementsByName(item)[0];
    }


    function buscarTotalDeTropas(item) {
        return parseInt($("a.units-entry-all[data-unit='" + item + "']")[0].innerText.replace('(', '').replace(')', ''));
    }

    function btnsDisponiveis(objeto) {
        var objRet = {}; var cont = 0;
        for (var i = 0; i < 4; i++) {
            if (objeto[i] !== undefined) {
                cont = cont + 1;
                objRet.btn = objeto[i];
            }
        }
        objRet.cont = cont;
        return objRet;
    }

    function buscarObjeto(sObj) {
        var objeto = document.querySelectorAll(sObj);
        if (objeto !== undefined && objeto[0] !== undefined) {
            return objeto;
        }
        else {
            return undefined;
        }
    }

    function qtdTropasDeAcordoComBotoes(botoesDisponiveis, tropa) {

        var valor = 0;

        if (botoesDisponiveis == 4) {
            if (tropa == modeloUtilizado().lanceiro) {
                valor = 40;
            } else if (tropa == modeloUtilizado().barbaro) {
                valor = 100;
            }
        } else if (botoesDisponiveis == 3) {
            if (tropa == modeloUtilizado().lanceiro) {
                valor = 60;
            } else if (tropa == modeloUtilizado().barbaro) {
                valor = 150;
            }
        } else if (botoesDisponiveis == 2) {
            if (tropa == modeloUtilizado().lanceiro) {
                valor = 120;
            } else if (tropa == modeloUtilizado().barbaro) {
                valor = 300;
            }
        } else if (botoesDisponiveis == 1) {
            if (tropa == modeloUtilizado().lanceiro) {
                valor = 300;
            } else if (tropa == modeloUtilizado().barbaro) {
                valor = 750;
            }
        }

        return valor;


    }


})();