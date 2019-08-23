import React from 'react';
import EquipmentTable from './EquipmentTable';

const headers = [
  {
    key: 'equipDesc',
    header: 'Test Equipment Description',
  },
  {
    key: 'testsSection',
    header: 'Tests',
  },
  /* {
      key: 'measType',
      header: 'Measurement Type',
      disabled: true,
    },
    {
        key: 'range',
        header: 'Range',
        disabled: true,
      },
    {
      key: 'accuracy',
      header: 'Accuracy',
      disabled: true,
    }, */
  {
    key: 'id',
    header: 'ID#',
  },
  {
    key: 'calDate',
    header: 'Calibration Date',
  },
  {
    key: 'calDueDate',
    header: 'Calibration Due',
  },
  {
    key: 'comments',
    header: 'Comments',
  },
];

const rows = [
  {
    equipDesc: 'A&D Scales, Model HV-200KGL, 500lb',
    testsSection: '',
    measType: ['Mass'],
    range: ['0-500 lb, 0-220 kg'],
    accuracy: ['±0.2 lb, ±0.1 kg'],
    id: 'EM7311946',
    calDate: '10/22/18',
    calDueDate: '10/22/19',
    comments: 'Out for calibration',
  },
  {
    equipDesc:
      'Agilent (Keysight), 8-Slot Multifunction Switch/Measure Unit Model 34980A',
    testsSection: '4.5, 5.3',
    measType: ['Degrees', 'Voltage', 'Current', 'Frequency', 'Resistance'],
    range: [
      '-100 to +400 degC',
      '±300 V AC/DC',
      '0-1 A',
      '0-300 kHz',
      '100-100 M-ohms',
    ],
    accuracy: ['±0.01%', '±0.05%', '±0.07%', '±0.005%', '±0.005%'],
    id: 'MY56481203',
    calDate: '5/3/18',
    calDueDate: '5/3/19',
    comments: 'Out for calibration',
  },
  {
    equipDesc: 'Agilent, 8-Slot Multifunction Switch/Measure Unit Model 34980A',
    testsSection: '4.5, 5.3',
    measType: ['Degrees', 'Voltage', 'Current', 'Frequency', 'Resistance'],
    range: [
      '-100 to +400 degC',
      '±300 V AC/DC',
      '0-1 A',
      '0-300 kHz',
      '100-100 M-ohms',
    ],
    accuracy: ['±0.01%', '±0.05%', '±0.07%', '±0.005%', '±0.005%'],
    id: 'MY44009623',
    calDate: '6/19/19',
    calDueDate: '6/19/20',
    comments: '',
  },
  {
    equipDesc: 'Agilent, N3300A 1800W DC Electronic Load',
    testsSection: '2.1.1.5, 2.1.2, 2.4.1, 2.4.2, 2.5',
    measType: ['Voltage, Current, Power'],
    range: ['Up to 1800W depending on load modules installed'],
    accuracy: ['± 0.10%'],
    id: 'MY41004100',
    calDate: 'N/A',
    calDueDate: 'N/A',
    comments: 'Load box does not get calibrated, just load modules',
  },
  {
    equipDesc: 'Agilent, N3306A 600W DC Electronic Load Module',
    testsSection: '2.1.1.5, 2.1.2, 2.4.1, 2.4.2, 2.5',
    measType: ['Voltage', 'Current', 'Power'],
    range: ['0-60V', '0-120A', '0-600W'],
    accuracy: ['± 0.10%', '± 0.10%', '± 0.10%'],
    id: 'MY41003762',
    calDate: '9/13/18',
    calDueDate: '9/13/19',
    comments: 'BER. Module damaged during Transcat-Transcat shipping',
  },
];

const EquipmentPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <EquipmentTable headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default EquipmentPage;
