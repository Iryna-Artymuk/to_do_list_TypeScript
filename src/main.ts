// import './css/style.css';

import FullList from './model/FullList.ts';
import ListItem from './model/ListItem.ts';
import UlListTemplates from './templates/ListTemplate.ts';

const initApp = (): void => {
  const fullList = FullList.instance;
  const templates = UlListTemplates.instance;

  const itemForm = document.getElementById('itemEntryForm') as HTMLFormElement;

  itemForm.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault();

    const input = document.getElementById('newItem') as HTMLInputElement;
    const newItemText: string = input.value.trim();
    if (!newItemText.length) {
      return;
    }

    const itemId: number = fullList.getList.length
      ? parseInt(fullList.getList[fullList.getList.length - 1].getId + 1)
      : 1;

    const newItem = new ListItem(itemId.toString(), newItemText);
    console.log('newItem : ', newItem );

    fullList.addItem(newItem);
    templates.render(fullList);
  });

  const clearItems = document.getElementById(
    'clearItemsButton'
  ) as HTMLButtonElement;

  clearItems.addEventListener('click', (): void => {
    fullList.clearList();
    templates.clear();
  });

  fullList.load();
  templates.render(fullList);
};

document.addEventListener('DOMContentLoaded', initApp);
