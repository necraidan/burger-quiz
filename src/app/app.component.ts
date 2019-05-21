import { Component, HostListener } from '@angular/core';

export enum KEY_CODE {
    ADD_ONE_MAYO = 49,
    SUB_ONE_MAYO = 50,
    ADD_ONE_KETCHUP = 51,
    SUB_ONE_KETCHUP = 52,
    GENERIQUE = 71,
    NUGGETS = 78,
    ADDITION = 65,
    SEL_OU_POIVRE = 83,
    MENUS = 77,
    DISABLE_VIDEO = 13,
    BURGER_DE_LA_MORT = 66
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    mayoCounter = 0;
    ketchupCounter = 0;

    isVideo = false;
    videoSrc = '';

    constructor() {}

    /**
     * g => générique
     * n => nuggets
     * s => sel ou poivre
     * m => menus
     * a => addition
     * b => burger de la mort
     * & => +1 mayo
     * é => -1 mayo
     * " => +1 ketchup
     * ' => -1 ketchup
     *
     * @param event
     */
    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        console.log(event.keyCode);
        switch (event.keyCode) {
            case KEY_CODE.ADD_ONE_MAYO:
                this.addMayo();
                break;
            case KEY_CODE.SUB_ONE_MAYO:
                this.subMayo();
                break;
            case KEY_CODE.ADD_ONE_KETCHUP:
                this.addKetchup();
                break;
            case KEY_CODE.SUB_ONE_KETCHUP:
                this.subKetchup();
                break;
            case KEY_CODE.GENERIQUE:
                this.isVideo = true;
                this.videoSrc = 'assets/videos/generique.mp4';
                break;
            case KEY_CODE.NUGGETS:
                this.isVideo = true;
                this.videoSrc = 'assets/videos/nuggets.mp4';
                break;
            case KEY_CODE.NUGGETS:
                this.isVideo = true;
                this.videoSrc = 'assets/videos/nuggets.mp4';
                break;
            case KEY_CODE.MENUS:
                this.isVideo = true;
                this.videoSrc = 'assets/videos/menus.mp4';
                break;
            case KEY_CODE.SEL_OU_POIVRE:
                this.isVideo = true;
                this.videoSrc = 'assets/videos/sel-ou-poivre.mp4';
                break;
            case KEY_CODE.ADDITION:
                this.isVideo = true;
                this.videoSrc = 'assets/videos/addition.mp4';
                break;
            case KEY_CODE.BURGER_DE_LA_MORT:
                this.isVideo = true;
                this.videoSrc = 'assets/videos/burger-mort.mp4';
                break;
            case KEY_CODE.DISABLE_VIDEO:
                this.isVideo = false;
                this.videoSrc = '';
                break;
        }
    }

    addMayo() {
        this.mayoCounter++;
    }

    subMayo() {
        this.mayoCounter--;
    }

    addKetchup() {
        this.ketchupCounter++;
    }

    subKetchup() {
        this.ketchupCounter--;
    }
}
