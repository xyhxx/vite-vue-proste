import Home from '@pages/home/index.vue';
import {mount, VueWrapper} from '@vue/test-utils';
import {setActivePinia, createPinia} from 'pinia';

describe('Home page', function() {
  let app: VueWrapper<any>;

  beforeEach(function() {
    setActivePinia(createPinia());
    app = mount(Home);
  });

  test('should render', function() {
    const img = app.get('img');
    expect(img.attributes('src')?.length).toBeGreaterThan(0);
  });

  test('Correct operation data', async function() {
    const incBtn = app.get('#inc_btn');
    const decBtn = app.get('#dec_btn');

    expect(app.get('#count').text()).toBe('count is 0');
    expect(app.get('#double_count').text()).toBe('double count is 0');

    await incBtn.trigger('click');

    expect(app.get('#count').text()).toBe('count is 1');
    expect(app.get('#double_count').text()).toBe('double count is 2');

    await incBtn.trigger('click');

    expect(app.get('#count').text()).toBe('count is 2');
    expect(app.get('#double_count').text()).toBe('double count is 4');

    await decBtn.trigger('click');

    expect(app.get('#count').text()).toBe('count is 1');
    expect(app.get('#double_count').text()).toBe('double count is 2');
  });
});
