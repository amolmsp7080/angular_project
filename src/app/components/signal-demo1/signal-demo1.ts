import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.html',
  styleUrl: './signal-demo1.css',
})
export class SignalDemo1 {
  cookieCount: WritableSignal<number> = signal(10);
  butter = computed(() => this.cookieCount() * 0.1);
  sugar = computed(() => this.cookieCount() * 0.05);
  flour = computed(() => this.cookieCount() * 0.2);
  updateCookieCount(event: any) {
    this.cookieCount.set(event.target.value);
  }
  // ===============
  num: WritableSignal<number> = signal(0);
  numDouble = computed(() => this.num() * 2);
  numSquare = computed(() => this.num() * this.num());
  messages: WritableSignal<string[]> = signal([]);

  numEffect = effect(() => {
    console.log(`Num changed:: ${this.num()}`);
  });

  increment() {
    this.num.update((val) => val + 1);
    this.messages.set([...this.messages(), `Value of Num is:${this.num()}`]);
  }
  decrement() {
    this.num.update((val) => val - 1);
    this.messages().pop();
    this.messages.set([...this.messages()]);
  }
  reset() {
    this.num.set(0);
    this.messages.set([]);
  }
}
