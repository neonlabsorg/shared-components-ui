import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component, Input } from "@angular/core";

/*
 *
 * Web Components use only plain strings as props
 *
 * */

const DEFAULTS = {
  title: "Something went wrong",
  description: "Sorry, you are not allowed to be here",
  imgUrl:
    "https://placehold.jp/ffffff/f549b4/600x400.png?text=Something%20went%20wrong",
  redirectUrl: "/",
  classList: "not-found_wrapper",
};

@Component({
  selector: "stub-not-found, StubNotFound",
  template: `
    <div [class]="classList || DEFAULTS.classList + ' div'">
      <a class="a" [attr.href]="redirectUrl || DEFAULTS.redirectUrl">
        <img
          [attr.src]="imgUrl || DEFAULTS.imgUrl"
          [attr.alt]="title || DEFAULTS.title"
        />
      </a>
    </div>
  `,
  styles: [
    `
      .div {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
      }
      .a {
        color: inherit;
        text-decoration: none;
      }
    `,
  ],
})
export class StubNotFound {
  DEFAULTS = DEFAULTS;

  @Input() classList: any;
  @Input() redirectUrl: any;
  @Input() imgUrl: any;
  @Input() title: any;
}

@NgModule({
  declarations: [StubNotFound],
  imports: [CommonModule],
  exports: [StubNotFound],
})
export class StubNotFoundModule {}
