import { Constructable } from '@aurelia/kernel';
import { NavigationInstruction } from './interfaces';
import { NavRoute } from './nav-route';
import { INavClasses } from './resources/nav';
import { IRouter } from './router';

export interface INavRoute<C extends Constructable = Constructable> {
  route?: NavigationInstruction<C> | NavigationInstruction<C>[];
  execute?: ((route: NavRoute) => void);
  condition?: boolean | ((route: NavRoute) => boolean);
  consideredActive?: NavigationInstruction<C> | NavigationInstruction<C>[] | ((route: NavRoute) => boolean);
  compareParameters?: boolean;
  link?: string;
  title: string;
  children?: INavRoute[];
  meta?: Record<string, unknown>;
}

export class Nav {
  public name: string;
  public routes: NavRoute[];
  public classes: INavClasses;

  public router: IRouter;

  constructor(router: IRouter, name: string, routes: NavRoute[] = [], classes: INavClasses = {}) {
    this.router = router;
    this.name = name;
    this.routes = routes;
    this.classes = classes;
    this.update();
  }

  public addRoutes(routes: INavRoute[]): void {
    for (const route of routes) {
      this.addRoute(this.routes, route);
    }
    this.update();
  }

  public update(): void {
    this.updateRoutes(this.routes);
    this.routes = this.routes.slice();
  }

  private addRoute(routes: NavRoute[], route: INavRoute): void {
    const newRoute = new NavRoute(this, route);
    routes.push(newRoute);
    if (route.children) {
      newRoute.children = [];
      for (const child of route.children) {
        this.addRoute(newRoute.children, child);
      }
    }
  }

  private updateRoutes(routes: NavRoute[]): void {
    for (const route of routes) {
      route.update();
      if (route.children && route.children.length) {
        this.updateRoutes(route.children);
      }
    }
  }
}
