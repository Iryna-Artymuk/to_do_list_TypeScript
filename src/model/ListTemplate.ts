import FullList from './FullList';

interface DomList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DomList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById('listItems') as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = '';
  }

  render(fullList: FullList): void {
    this.clear();
    fullList.getList.forEach(element => {
      const li = document.createElement('li') as HTMLLIElement;
      li.className = 'item';
      const check = document.createElement('input') as HTMLInputElement;
      check.type = 'checkbox';
      check.id = element.getId;
      check.tabIndex = 0;
      check.checked = element.getChecked;
      li.append(check);
      check.addEventListener('change', () => {
        element.setChecked = !element.getChecked;
      });

      const label = document.createElement('label') as HTMLLabelElement;
      label.htmlFor = element.getId;
      label.textContent = element.getItem;
      li.append(label);

      const button = document.createElement('button') as HTMLButtonElement;
      button.className = 'button';
      button.textContent = 'X';
      li.append(button);
      button.addEventListener('click', () => {
        fullList.removeItem(element.getId);
        this.render(fullList);
      });
      this.ul.append(li);
    });
  }
}
