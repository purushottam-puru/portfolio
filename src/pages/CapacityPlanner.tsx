import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Clock, 
  TrendingDown, 
  TrendingUp, 
  Inbox, 
  Phone, 
  Ticket, 
  Zap,
  ChevronRight,
  Info
} from "lucide-react";

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (val: number) => void;
  unit?: string;
  step?: number;
}

const Slider = ({ label, value, min, max, onChange, unit = "", step = 1 }: SliderProps) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <label className="text-zinc-400 text-sm font-medium">{label}</label>
      <span className="text-white font-bold text-lg">
        {value.toLocaleString()}{unit}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onInput={(e) => onChange(Number((e.target as HTMLInputElement).value))}
      className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:bg-zinc-600 transition-colors"
    />
  </div>
);

const SummaryCard = ({ title, value, subValue, trend }: { title: string, value: string, subValue: string, trend?: string }) => (
  <motion.div 
    layout
    className="bg-zinc-800 p-6 rounded-2xl border border-zinc-700/50"
  >
    <p className="text-zinc-400 text-sm font-medium mb-2">{title}</p>
    <div className="flex items-baseline gap-2">
      <h4 className="text-3xl font-bold text-emerald-400">{value}</h4>
      {trend && <span className="text-emerald-500 text-sm font-bold">{trend}</span>}
    </div>
    <p className="text-zinc-500 text-xs mt-1">{subValue}</p>
  </motion.div>
);

export default function CapacityPlanner() {
  // Agent Configuration
  const [callOnly, setCallOnly] = useState(50);
  const [ticketOnly, setTicketOnly] = useState(40);
  const [hybrid, setHybrid] = useState(60);
  const [hybridCallPercent, setHybridCallPercent] = useState(60);
  
  // Shift & Productivity
  const [shiftLength, setShiftLength] = useState(8);
  const [utilisation, setUtilisation] = useState(85);
  
  // Inflow Volume
  const [callsPerDay, setCallsPerDay] = useState(5000);
  const [ticketsPerDay, setTicketsPerDay] = useState(2500);
  const [callDeflection, setCallDeflection] = useState(3);
  const [ticketDeflection, setTicketDeflection] = useState(5);
  
  // AHT
  const [callAHTBefore, setCallAHTBefore] = useState(9);
  const [callAHTAfter, setCallAHTAfter] = useState(6);
  const [ticketAHTBefore, setTicketAHTBefore] = useState(16);
  const [ticketAHTAfter, setTicketAHTAfter] = useState(9);
  
  // Opening Backlog
  const [openingBacklog, setOpeningBacklog] = useState(7500);

  const stats = useMemo(() => {
    const totalAgents = callOnly + ticketOnly + hybrid;
    const callAgents = callOnly + (hybrid * (hybridCallPercent / 100));
    const ticketAgents = ticketOnly + (hybrid * (1 - hybridCallPercent / 100));
    
    const totalMinsPerAgent = shiftLength * 60 * (utilisation / 100);
    
    const netInflowCalls = Math.round(callsPerDay * (1 - callDeflection / 100));
    const netInflowTickets = Math.round(ticketsPerDay * (1 - ticketDeflection / 100));
    
    const ticketCapacityBefore = Math.round((ticketAgents * totalMinsPerAgent) / ticketAHTBefore);
    const ticketCapacityAfter = Math.round((ticketAgents * totalMinsPerAgent) / ticketAHTAfter);
    
    const callAHTImprovement = Math.round(((callAHTBefore - callAHTAfter) / callAHTBefore) * 100);
    const ticketAHTImprovement = Math.round(((ticketAHTBefore - ticketAHTAfter) / ticketAHTBefore) * 100);
    
    const netPerDayBefore = Math.round(ticketsPerDay - ticketCapacityBefore);
    const netPerDayAfter = Math.round(netInflowTickets - ticketCapacityAfter);

    const tracker = Array.from({ length: 7 }, (_, i) => {
      const day = i + 1;
      const backlogBefore = openingBacklog + (netPerDayBefore * day);
      const backlogAfter = openingBacklog + (netPerDayAfter * day);
      const reduction = Math.round(((backlogBefore - backlogAfter) / backlogBefore) * 100);
      return {
        day,
        backlogBefore,
        netBefore: netPerDayBefore,
        backlogAfter,
        netAfter: netPerDayAfter,
        reduction
      };
    });

    return {
      totalAgents,
      callAgents,
      ticketAgents,
      totalMinsPerAgent,
      netInflowCalls,
      netInflowTickets,
      ticketCapacityBefore,
      ticketCapacityAfter,
      callAHTImprovement,
      ticketAHTImprovement,
      netPerDayBefore,
      netPerDayAfter,
      tracker
    };
  }, [
    callOnly, ticketOnly, hybrid, hybridCallPercent,
    shiftLength, utilisation,
    callsPerDay, ticketsPerDay, callDeflection, ticketDeflection,
    callAHTBefore, callAHTAfter, ticketAHTBefore, ticketAHTAfter,
    openingBacklog
  ]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Operations Capacity Planner</h1>
            <p className="text-zinc-500 text-lg">Simulate impact of process improvements and FAQ deflection on backlog.</p>
          </div>
          <div className="flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800">
            <Users className="w-5 h-5 text-emerald-500" />
            <span className="text-zinc-400 font-medium">Total Agents:</span>
            <span className="text-white font-bold">{stats.totalAgents}</span>
          </div>
        </div>

        {/* Configuration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Agent Configuration */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs font-bold">
              <Users className="w-4 h-4" />
              Agent Configuration
            </div>
            <div className="bg-zinc-900 p-8 rounded-[32px] border border-zinc-800 space-y-8">
              <Slider label="Call-only agents" value={callOnly} min={0} max={150} onChange={setCallOnly} />
              <Slider label="Ticket-only agents" value={ticketOnly} min={0} max={150} onChange={setTicketOnly} />
              <Slider label="Hybrid agents" value={hybrid} min={0} max={150} onChange={setHybrid} />
              <Slider label="Hybrid: % time on calls" value={hybridCallPercent} min={0} max={100} unit="%" onChange={setHybridCallPercent} />
            </div>
          </div>

          {/* Shift & Productivity */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs font-bold">
              <Clock className="w-4 h-4" />
              Shift & Productivity
            </div>
            <div className="bg-zinc-900 p-8 rounded-[32px] border border-zinc-800 space-y-8">
              <Slider label="Shift length (hrs)" value={shiftLength} min={4} max={12} onChange={setShiftLength} />
              <Slider label="Utilisation %" value={utilisation} min={50} max={100} unit="%" onChange={setUtilisation} />
            </div>
          </div>

          {/* Inflow Volume */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs font-bold">
              <Inbox className="w-4 h-4" />
              Inflow Volume
            </div>
            <div className="bg-zinc-900 p-8 rounded-[32px] border border-zinc-800 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Slider label="Calls/day" value={callsPerDay} min={0} max={10000} step={100} onChange={setCallsPerDay} />
                <Slider label="Tickets/day" value={ticketsPerDay} min={0} max={5000} step={50} onChange={setTicketsPerDay} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Slider label="Call deflection %" value={callDeflection} min={0} max={50} unit="%" onChange={setCallDeflection} />
                <Slider label="Ticket deflection %" value={ticketDeflection} min={0} max={50} unit="%" onChange={setTicketDeflection} />
              </div>
            </div>
          </div>

          {/* AHT Configuration */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs font-bold">
              <Zap className="w-4 h-4" />
              AHT — Before & After CFT / SOPs
            </div>
            <div className="bg-zinc-900 p-8 rounded-[32px] border border-zinc-800 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-zinc-500 text-xs font-bold uppercase">Call AHT (mins)</p>
                  <Slider label="Before CFT" value={callAHTBefore} min={1} max={20} onChange={setCallAHTBefore} />
                  <Slider label="After CFT" value={callAHTAfter} min={1} max={20} onChange={setCallAHTAfter} />
                </div>
                <div className="space-y-6">
                  <p className="text-zinc-500 text-xs font-bold uppercase">Ticket AHT (mins)</p>
                  <Slider label="Before CFT" value={ticketAHTBefore} min={1} max={30} onChange={setTicketAHTBefore} />
                  <Slider label="After CFT" value={ticketAHTAfter} min={1} max={30} onChange={setTicketAHTAfter} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Workings Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs font-bold">
            <Info className="w-4 h-4" />
            The Workings
          </div>
          <div className="bg-zinc-900 p-8 rounded-[32px] border border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-zinc-500 text-xs font-bold uppercase">Effective Headcount</p>
              <div className="text-sm text-zinc-400">
                <p>Call Agents: <span className="text-white font-bold">{stats.callAgents.toFixed(1)}</span></p>
                <p>Ticket Agents: <span className="text-white font-bold">{stats.ticketAgents.toFixed(1)}</span></p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-500 text-xs font-bold uppercase">Productivity</p>
              <div className="text-sm text-zinc-400">
                <p>Mins/Agent/Day: <span className="text-white font-bold">{stats.totalMinsPerAgent.toFixed(0)}</span></p>
                <p>Net Inflow (Tickets): <span className="text-white font-bold">{stats.netInflowTickets}</span></p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-500 text-xs font-bold uppercase">Daily Delta</p>
              <div className="text-sm text-zinc-400">
                <p>Before: <span className="text-red-400 font-bold">+{stats.netPerDayBefore}</span>/day</p>
                <p>After: <span className={stats.netPerDayAfter > 0 ? "text-red-400 font-bold" : "text-emerald-400 font-bold"}>
                  {stats.netPerDayAfter > 0 ? `+${stats.netPerDayAfter}` : stats.netPerDayAfter}/day
                </span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Backlog */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs font-bold">
            <TrendingDown className="w-4 h-4" />
            Opening Backlog
          </div>
          <div className="bg-zinc-900 p-8 rounded-[32px] border border-zinc-800">
            <Slider label="Backlog at day 0" value={openingBacklog} min={0} max={20000} step={500} onChange={setOpeningBacklog} />
          </div>
        </div>

        {/* Capacity Summary */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs font-bold">
            <TrendingUp className="w-4 h-4" />
            Capacity Summary
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SummaryCard 
              title="Call AHT improvement" 
              value={`${stats.callAHTImprovement}%`} 
              subValue={`${callAHTBefore} → ${callAHTAfter} mins`}
            />
            <SummaryCard 
              title="Ticket AHT improvement" 
              value={`${stats.ticketAHTImprovement}%`} 
              subValue={`${ticketAHTBefore} → ${ticketAHTAfter} mins`}
            />
            <SummaryCard 
              title="Ticket capacity (before)" 
              value={stats.ticketCapacityBefore.toLocaleString()} 
              subValue="tickets/day"
            />
            <SummaryCard 
              title="Ticket capacity (after)" 
              value={stats.ticketCapacityAfter.toLocaleString()} 
              subValue="tickets/day"
              trend={`+${Math.round(((stats.ticketCapacityAfter - stats.ticketCapacityBefore) / stats.ticketCapacityBefore) * 100)}% vs before`}
            />
          </div>
        </div>

        {/* 7-Day Backlog Tracker */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-zinc-500 uppercase tracking-widest text-xs font-bold">
            <Clock className="w-4 h-4" />
            7-Day Backlog Tracker
          </div>
          <div className="bg-zinc-900 rounded-[32px] border border-zinc-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="p-6 text-zinc-500 text-xs font-bold uppercase">Day</th>
                    <th className="p-6 text-zinc-500 text-xs font-bold uppercase">Backlog (before)</th>
                    <th className="p-6 text-zinc-500 text-xs font-bold uppercase">Net/day (before)</th>
                    <th className="p-6 text-zinc-500 text-xs font-bold uppercase">Backlog (after CFT)</th>
                    <th className="p-6 text-zinc-500 text-xs font-bold uppercase">Net/day (after)</th>
                    <th className="p-6 text-zinc-500 text-xs font-bold uppercase">% reduction</th>
                    <th className="p-6 text-zinc-500 text-xs font-bold uppercase text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {stats.tracker.map((row) => (
                    <tr key={row.day} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="p-6 font-medium text-zinc-400">Day {row.day}</td>
                      <td className="p-6 font-bold">{row.backlogBefore.toLocaleString()}</td>
                      <td className="p-6 text-red-400 font-bold">+{row.netBefore}</td>
                      <td className="p-6 font-bold">{row.backlogAfter.toLocaleString()}</td>
                      <td className="p-6 text-emerald-400 font-bold">{row.netAfter > 0 ? `+${row.netAfter}` : row.netAfter}</td>
                      <td className="p-6 text-zinc-400">{row.reduction}%</td>
                      <td className="p-6 text-right">
                        <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-bold">
                          {row.reduction}% reduced
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex items-start gap-4 p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
          <Info className="w-6 h-6 text-emerald-500 shrink-0" />
          <p className="text-sm text-emerald-500/80 leading-relaxed">
            This simulation assumes constant inflow and linear capacity application. 
            "After CFT" results incorporate both AHT reduction and FAQ deflection impact. 
            Calculations are based on effective agent headcount derived from the hybrid split.
          </p>
        </div>

      </div>
    </div>
  );
}
