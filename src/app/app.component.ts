import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rich-text-editor-chcek';
  @ViewChild('sidebar', { static: false })
  sidebar!: SidebarComponent;
  isShow: boolean = false;

  openSidebar(){
    this.sidebar.show();
  }

  hideSidebar(){
    this.sidebar.hide();
  }
  dynamic(){
    this.isShow = !this.isShow;
  }
}
