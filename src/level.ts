export class LogLevel {
  readonly value: number
  readonly name: string

  constructor(value: number, name: string) {
    this.value = value
    this.name = name
  }
}


export const DEBUG: LogLevel = new LogLevel(1, "DEBUG")
export const INFO: LogLevel = new LogLevel(2, "INFO")
export const WARN: LogLevel = new LogLevel(3, "WARN")
export const ERROR: LogLevel = new LogLevel(4, "ERROR")

export const TRACE: LogLevel = new LogLevel(10, "TRACE")

export const OFF: LogLevel = new LogLevel(99, "OFF")