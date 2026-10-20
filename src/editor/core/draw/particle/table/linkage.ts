import type { IElement } from '../../../../interface/Element'
import type { ITd } from '../../../../interface/table/Td'

/** 收集表格内所有单元格 */
export function collectTableTds(table: IElement): ITd[] {
  const tds: ITd[] = []
  if (!table.trList) return tds
  for (const tr of table.trList) {
    for (const td of tr.tdList) tds.push(td)
  }
  return tds
}

/**
 * 需求 8.3.1：传递式求解每个单元格的有效 show。
 * - enableLink=false：忽略联动，按 td.show（缺省 true）。
 * - enableLink=true 且 linkChildIds 为空：正常显示（按 td.show）。
 * - enableLink=true 且 linkChildIds 非空：仅当所有子单元格有效 show 均为 false 时隐藏。
 * - 环检测：命中环保守返回 true，避免整表消失。
 * 返回：tdId -> effectiveShow
 */
export function resolveCellShow(table: IElement): Map<string, boolean> {
  const tds = collectTableTds(table)
  const byId = new Map<string, ITd>()
  for (const td of tds) {
    if (td.id) byId.set(td.id, td)
  }
  const cache = new Map<string, boolean>()
  const visiting = new Set<string>()
  const resolve = (td: ITd): boolean => {
    const id = td.id!
    if (cache.has(id)) return cache.get(id)!
    if (visiting.has(id)) return true
    visiting.add(id)
    let eff: boolean = td.show ?? true
    if (td.enableLink) {
      const children = td.linkChildIds ?? []
      if (children.length > 0) {
        eff = children.some(cid => {
          const child = byId.get(cid)
          return child ? resolve(child) : true
        })
      }
    }
    visiting.delete(id)
    cache.set(id, eff)
    return eff
  }
  for (const td of tds) {
    if (td.id) resolve(td)
  }
  return cache
}

/**
 * 需求 8.4.1.4：环校验。
 * 当把 candidateChildId 选为 ancestorId 的子单元格时，若 ancestorId 出现在
 * candidateChildId 沿 linkChildIds 向下的链路中，则会产生环，禁止选择。
 */
export function buildsCycle(
  table: IElement,
  ancestorId: string,
  candidateChildId: string
): boolean {
  const byId = new Map<string, ITd>()
  for (const td of collectTableTds(table)) {
    if (td.id) byId.set(td.id, td)
  }
  const visiting = new Set<string>()
  const dfs = (id: string): boolean => {
    if (id === ancestorId) return true
    if (visiting.has(id)) return false
    visiting.add(id)
    const td = byId.get(id)
    for (const c of td?.linkChildIds ?? []) {
      if (dfs(c)) return true
    }
    visiting.delete(id)
    return false
  }
  return dfs(candidateChildId)
}
