import { formatNumber, summarizeScenario } from '../domain';
import type { EnergyScenario } from '../types';

interface ScenarioCardProps { scenario: EnergyScenario; active: boolean; onSelect: () => void; }

export function ScenarioCard({ scenario, active, onSelect }: ScenarioCardProps) {
  const totalKwh = summarizeScenario(scenario).total.monthlyKwh;
  return <button className={`scenario-card ${active ? 'active' : ''}`} onClick={onSelect}>
    <span className="scenario-dot" />
    <span className="scenario-copy"><strong>{scenario.name}</strong><small>{scenario.devices.length} 台设备 · {formatNumber(totalKwh)} kWh / 月</small></span>
    <span className="arrow">→</span>
  </button>;
}
