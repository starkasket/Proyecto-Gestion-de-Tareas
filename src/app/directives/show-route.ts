import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Directive({
  selector: '[appShowRoute]',
  standalone: false
})
export class ShowRoute implements OnDestroy {
  private route: string = '';
  private sub: Subscription;

  constructor(
    private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private router: Router) {
    this.sub = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.updateView());
    this.updateView();
  }


  @Input() set appShowRoute(route: string) {
    this.route = route;
    this.updateView();
  }

  private updateView() {
    const currentRoute = this.router.url;


    const match = this.route === '/' ? currentRoute === '/' : currentRoute.startsWith(this.route);

    this.viewContainer.clear();
    if (match) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}


