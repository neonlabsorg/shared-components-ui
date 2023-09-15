import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component, Input } from "@angular/core";

/*
 *
 * Web Components use only plain strings as props
 *
 * */

const DEFAULTS = {
  title: "We use cookies",
  description:
    "If you continue browsing, we consider that you have accepted the",
  policyText: "cookies policy",
  policyUrl: "cookie-policy",
  classList: {
    container:
      "fixed bottom-5 right-5 w-[calc(100%-40px)] sm:w-72 bg-cookie-banner p-5 rounded-lg z-50 drop-shadow-lg",
    title: "font-bold text-white text-lg",
    description: "text-xs text-grey mb-2",
    policyUrl:
      "text-pink hover:text-pink-weak cursor-pointer tracking-tight underline",
    acceptCta: "text-base font-bold text-pink hover:text-pink-weak",
    postponeCta:
      "pl-4 uppercase text-black-light text-base font-bold hover:text-black-light/70",
  },
  buttonGroupContent: {
    acceptText: "Accept",
    postponeText: "Ask me later",
  },
};

@Component({
  selector: "cookie-control, CookieControl",
  template: `
    <ng-container *ngIf="show">
      <div
        [class]="customClassList?.container || containerClass || DEFAULTS.classList.container"
      >
        <h4
          [class]="customClassList?.title || titleClass || DEFAULTS.classList.title"
        >
          {{title || DEFAULTS.title}}
        </h4>

        <p
          [class]="customClassList?.description || descriptionClass || DEFAULTS.classList.description"
        >
          {{description || DEFAULTS.description}}

          <a
            [class]="customClassList?.policyUrl || policyUrlClass || DEFAULTS.classList.policyUrl"
            [attr.href]="policyUrl || DEFAULTS.policyUrl"
            [attr.target]="linkTarget ? '_blank' : '_self'"
          >
            {{policyText || DEFAULTS.policyText}}
          </a>
          .
        </p>

        <button
          [class]="customClassList?.acceptCta || acceptCtaClass || DEFAULTS.classList.acceptCta"
          (click)="acceptCookies()"
        >
          {{(buttonGroupContent?.acceptText || acceptText ||
              DEFAULTS.buttonGroupContent.acceptText).toUpperCase()}}
        </button>

        <button
          [class]="customClassList?.postponeCta || postponeCtaClass || DEFAULTS.classList.postponeCta"
          (click)="postponeCookies()"
        >
          {{(buttonGroupContent?.postponeText || postponeText ||
              DEFAULTS.buttonGroupContent.postponeText).toUpperCase()}}
        </button>
      </div>
    </ng-container>
  `,
})
export class CookieControl {
  DEFAULTS = DEFAULTS;

  @Input() customClassList: any;
  @Input() containerClass: any;
  @Input() titleClass: any;
  @Input() title: any;
  @Input() descriptionClass: any;
  @Input() description: any;
  @Input() policyUrlClass: any;
  @Input() policyUrl: any;
  @Input() linkTarget: any;
  @Input() policyText: any;
  @Input() acceptCtaClass: any;
  @Input() buttonGroupContent: any;
  @Input() acceptText: any;
  @Input() postponeCtaClass: any;
  @Input() postponeText: any;

  show = true;
  acceptCookies() {
    localStorage.setItem("cookie-usage", "true");
    this.show = false;
  }
  postponeCookies() {
    localStorage.setItem("cookie-expire", new Date().getTime().toString());
    this.show = false;
  }
  checkCookieAcceptancePostpone() {
    const expireDate = localStorage.getItem("cookie-expire");
    if (
      expireDate &&
      Math.abs(Number(expireDate) - new Date().getTime()) / (60 * 60 * 1000) >
        24
    ) {
      localStorage.removeItem("cookie-expire");
      //Banner is visible
      return true;
    }
    return false;
  }

  ngOnInit() {
    const expireDate = localStorage.getItem("cookie-expire");
    this.show =
      this.checkCookieAcceptancePostpone() ||
      (!expireDate && !localStorage.getItem("cookie-usage"));
  }
}

@NgModule({
  declarations: [CookieControl],
  imports: [CommonModule],
  exports: [CookieControl],
})
export class CookieControlModule {}
