import { Draw } from '../draw/Draw'

interface HistoryEntry {
  /** 恢复该检查点的函数 */
  restore: Function
  /**
   * 该检查点对应的「可编辑占位符签名」。
   * 与 historyRecordEditableOnly 配合：仅当签名相对上一检查点变化时才入栈。
   */
  sig: string
}

export class HistoryManager {
  private undoStack: Array<HistoryEntry> = []
  private redoStack: Array<HistoryEntry> = []
  private maxRecordCount: number

  constructor(draw: Draw) {
    // 忽略第一次历史记录
    this.maxRecordCount = draw.getOptions().historyMaxRecordCount + 1
  }

  public undo() {
    if (this.undoStack.length > 1) {
      const pop = this.undoStack.pop()!
      this.redoStack.push(pop)
      if (this.undoStack.length) {
        this.undoStack[this.undoStack.length - 1].restore()
      }
    }
  }

  public redo() {
    if (this.redoStack.length) {
      const pop = this.redoStack.pop()!
      this.undoStack.push(pop)
      pop.restore()
    }
  }

  public execute(fn: Function, sig = '') {
    this.undoStack.push({ restore: fn, sig })
    if (this.redoStack.length) {
      this.redoStack = []
    }
    while (this.undoStack.length > this.maxRecordCount) {
      this.undoStack.shift()
    }
  }

  public isCanUndo(): boolean {
    return this.undoStack.length > 1
  }

  public isCanRedo(): boolean {
    return !!this.redoStack.length
  }

  public isStackEmpty(): boolean {
    return !this.undoStack.length && !this.redoStack.length
  }

  public recovery() {
    this.undoStack = []
    this.redoStack = []
  }

  public popUndo() {
    const pop = this.undoStack.pop()
    return pop?.restore
  }

  /** 当前撤销栈栈顶检查点的可编辑占位符签名（空栈返回 null） */
  public getTopUndoSignature(): string | null {
    if (!this.undoStack.length) return null
    return this.undoStack[this.undoStack.length - 1].sig
  }
}
