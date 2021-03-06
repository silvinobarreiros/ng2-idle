import {KeepaliveSvc} from '@ng-idle/core';

export class MockKeepaliveSvc extends KeepaliveSvc {
  isRunning: boolean = false;

  start(): void {
    this.isRunning = true;
  }

  stop(): void {
    this.isRunning = false;
  }

  ping(): void {
    // do nothing
  }
}
