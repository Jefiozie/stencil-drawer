import { Component, Host, h, State, Method } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @State() open = true;

  @Method()
  async toggleDrawer() {
    this.open = !this.open;
  }
  render() {
    return (
      <Host>
        <div class="drawer-container">
          <div class={{ 'drawer': true, 'open': this.open }}>
            <div class="drawer-content">
              <slot name="drawer-content"></slot>
            </div>
          </div>
          <div class={{'content':true, 'close': !this.open}}>
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    )
  }
}
