export type Period = 'early' | 'mid' | 'late';

export interface SeasonPeriod {
  key: string;            // e.g. "11-mid"
  month: number;          // 1..12
  period: Period;         // 'early' | 'mid' | 'late'
  labelJa: string;        // "11月中旬"
  labelEn: string;        // "Mid-November"
  shortLabelJa: string;   // "11月中旬"
  shortLabelEn: string;   // "Mid-Nov"
  monthNameEn: string;    // "November"
  icon: string;           // "🍁", "🍂", "❄️", etc.
  isCurrent: boolean;     // 最も現在に近いシーズン
}

const MONTH_NAMES_EN = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const PERIOD_LABELS_JA: Record<Period, string> = {
  early: '上旬',
  mid: '中旬',
  late: '下旬',
};

const PERIOD_LABELS_EN: Record<Period, string> = {
  early: 'Early',
  mid: 'Mid',
  late: 'Late',
};

function getSeasonIcon(month: number, period: Period): string {
  if (month === 3 || month === 4) return '🌸';
  if (month === 5) return '🌿';
  if (month === 6) return '☔';
  if (month === 7 || month === 8) return '🌻';
  if (month === 9) return '🎑';
  if (month === 10) return '🎃';
  if (month === 11) {
    return period === 'early' ? '🍁' : '🍂';
  }
  if (month === 12) {
    return period === 'late' ? '🎍' : '🎄';
  }
  if (month === 1) return '🎍';
  if (month === 2) return '❄️';
  return '🍃';
}

/**
 * Returns upcoming seasons starting from referenceDate.
 * e.g., if today is Nov 9, 2026, the 4 upcoming seasons are:
 * 1. 11月中旬 (Nov 11-20)
 * 2. 11月下旬 (Nov 21-30)
 * 3. 12月上旬 (Dec 1-10)
 * 4. 12月中旬 (Dec 11-20)
 */
export function getUpcomingSeasons(count = 4, referenceDate = new Date()): SeasonPeriod[] {
  const day = referenceDate.getDate();
  let currentMonth = referenceDate.getMonth() + 1; // 1..12
  let currentPeriod: Period;

  // Determine current period
  // If we are at the end of a period (e.g. day 9 is near mid-month), 
  // users are planning for the imminent/next period.
  if (day <= 10) {
    // 1..10 is early, but if day is 7..10, mid is practically tomorrow.
    // For general trip planning, start with current early (or mid if day >= 6)
    currentPeriod = day >= 7 ? 'mid' : 'early';
  } else if (day <= 20) {
    currentPeriod = day >= 17 ? 'late' : 'mid';
  } else {
    currentPeriod = day >= 27 ? 'early' : 'late';
    if (day >= 27) {
      currentMonth = currentMonth === 12 ? 1 : currentMonth + 1;
    }
  }

  const periodsOrder: Period[] = ['early', 'mid', 'late'];
  let periodIdx = periodsOrder.indexOf(currentPeriod);
  let month = currentMonth;

  const result: SeasonPeriod[] = [];

  for (let i = 0; i < count; i++) {
    const p = periodsOrder[periodIdx];
    const key = `${month}-${p}`;
    const pLabelJa = PERIOD_LABELS_JA[p];
    const pLabelEn = PERIOD_LABELS_EN[p];
    const mNameEn = MONTH_NAMES_EN[month];

    result.push({
      key,
      month,
      period: p,
      labelJa: `${month}月${pLabelJa}`,
      labelEn: `${pLabelEn}-${mNameEn}`,
      shortLabelJa: `${month}月${pLabelJa}`,
      shortLabelEn: `${pLabelEn}-${mNameEn.slice(0, 3)}`,
      monthNameEn: mNameEn,
      icon: getSeasonIcon(month, p),
      isCurrent: i === 0,
    });

    // Advance to next period
    periodIdx++;
    if (periodIdx >= periodsOrder.length) {
      periodIdx = 0;
      month = month === 12 ? 1 : month + 1;
    }
  }

  return result;
}
