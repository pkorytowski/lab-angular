import { TodoPresenter } from './todo-presenter';

describe('TodoPresenter', () => {
  it('should create an instance', () => {
    expect(new TodoPresenter()).toBeTruthy();
  });

  it('should add item',()=>{
    let presenter = new TodoPresenter();
    presenter.addItem("test","test");
    expect(presenter.Items.length).toEqual(4);
  });

  it('should update item', ()=>{
    let presenter = new TodoPresenter();
    presenter.setCompleted(1, true);
    expect(presenter.Items[0].completed).toEqual(true);
  })

  it('should remove item', ()=> {
    let presenter = new TodoPresenter();
    expect(presenter.Items.length).toEqual(3);
    presenter.removeItem(1);
    expect(presenter.Items.length).toEqual(2);
  })

});
