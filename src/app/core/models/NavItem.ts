export class NavItem {
    public _title: string;
    public _imgPath: string;
    public _description: string;
    public _route: string;
    public _isHovered: boolean = false;

    constructor(title: string, imgPath: string, description: string, route: string) {
        this._title = title;
        this._imgPath = imgPath;
        this._description = description;
        this._route = route;
    }
}