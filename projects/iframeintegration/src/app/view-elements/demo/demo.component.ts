import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import {
	CrtInput,
	CrtInterfaceDesignerItem,
	CrtViewElement,
} from "@creatio-devkit/common";
import { SubscriptionLike } from "rxjs";


@CrtViewElement({
	selector: "usr-demo",
	type: "usr.Demo",
	inputs: {
		src: "",
		title: "",
		frameborder: "",
		allow: "",
	},
})
@CrtInterfaceDesignerItem({
  toolbarConfig: {
    caption: "Your component",
    name: "usr-demo",
    icon: require("!!raw-loader?{esModule:false}!./iframe-svgrepo-com.svg"),
  },
})

@Component({
	selector: "usr-demo",
	templateUrl: './demo.component.html',
	styleUrls : ['./demo.component.css'],
	encapsulation: ViewEncapsulation.ShadowDom
  })

export class DemoComponent implements OnInit, OnDestroy {

	private _subscription?: SubscriptionLike;
	constructor() {
		this.title = "YouTube video player";
		this.src = "https://www.youtube.com/embed/IbYrd4QyMAY?si=tiSba_b1NWSUzO7e";
	 }

	//#region Inputs
	@Input()
	public loading = false;

	//#region Src
	private _src : string = "https://www.youtube.com/embed/IbYrd4QyMAY?si=tiSba_b1NWSUzO7e";
	public get src() : string {
		return this._src;
	}

	@Input() 
	@CrtInput()
	public set src(v : string) {
		this._src = v;
	}
	//#endregion

	//#region Title
	private _title : string = "YouTube video player";
	public get title() : string {
		return this._title;
	}

	@Input() 
	@CrtInput()
	public set title(v : string) {
		this._title = v;
	}
	//#endregion

	//#endregion


	ngOnInit(): void {
		
	}

	public showAlert() {
		alert("Congrats, welcome to Freedom!");
	}
 	 public ngOnDestroy() {
		this._subscription?.unsubscribe();
	}
}