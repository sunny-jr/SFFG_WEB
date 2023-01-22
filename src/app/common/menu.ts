export class Menu {
  title: string;
  link: string;
  icon: string;
  isActive: boolean;
  subMenu: Menu[];

  /**
   *
   */
  constructor(data: any = {}) {
    (this.title = data.title || ''),
      (this.link = data.link || ''),
      (this.icon = data.icon || ''),
      (this.isActive = data.isActive),
      (this.subMenu = data.subMenu || []);
  }
}
