// export interface Item {
//   id: string;
//   item: string;
//   checked?: boolean;
// }

export default class ListItem {
  constructor(
    private _id: string = '',
    private _item: string = '',
    private _checked: boolean = false
  ) {}

  public get getId(): string {
    return this._id;
  }
  public set setId(id: string) {
    this._id = id;
  }

  public get getItem(): string {
    return this._item;
  }
  public set setItem(item: string) {
    this._item = item;
  }

  public get getChecked(): boolean {
    return this._checked;
  }
  public set setChecked(checked: boolean) {
    this._checked = checked;
  }
}
