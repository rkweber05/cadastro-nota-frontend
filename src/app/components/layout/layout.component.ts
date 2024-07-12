import { Component } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-layout',
  standalone: true,
    imports: [
        RouterOutlet,
        MatButtonToggle,
        MatButton
    ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

    constructor(private _router: Router) {
    }

    cadastro() {
        this._router.navigate(['/novo']);
    }
}
