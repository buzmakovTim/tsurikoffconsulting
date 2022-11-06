import React from 'react';



export type SectionType = {
    title: TitleType,
    id?: string,
    content: ContentType
}

type ContentType = string[] | PriceType[]
export type PriceTitleType = 'START-UP' | 'GROWING' | 'ESTABLISHED' | 'FULL TIME' | 'PART TIME' | 'HOURLY'
type RateType = 'Monthly Rate' | 'Hourly Rate'
type CategoryType = 'Cash Basis' | 'Accrual Basis'

export type PriceType = {
    title: PriceTitleType
    rateType: RateType
    rate: string
    prepaid: string
    category?: CategoryType
    sectionOne?: string[]
    sectionTwo?: string[]
}

export type TitleType = 'About Us' | 'Services' | 'Key Technologies' | 'Pricing' | 'Contact Us'

export type StateType = {
   title: string, 
   sections: SectionType[]
}

const pricingData: PriceType[] = [
    {
        title: 'START-UP',
        rateType: 'Monthly Rate',
        rate: '$100/mo',
        prepaid: 'Prepaid Annually or $110/mo',
        category: 'Cash Basis',
        sectionOne: ['Up to 20 Transactions Choose 1 add-on'],
        sectionTwo: ['Payroll Bookkeeping', 'Tracking multiple revenue', 'Tracking reimbursement to clients or employees', 'Accounting for loans, leases, or lines of credit']   
    },
    {
        title: 'GROWING',
        rateType: 'Monthly Rate',
        rate: '$125/mo',
        prepaid: 'Prepaid Annually or $140/mo',
        category: 'Cash Basis',
        sectionOne: ['Up to 50 Transactions Choose 3 add-ons'],
        sectionTwo: ['Payroll Bookkeeping', 'Tracking multiple revenue', 'Tracking reimbursement to clients or employees', 'Accounting for loans, leases, or lines of credit']   
    },
    {
        title: 'ESTABLISHED',
        rateType: 'Monthly Rate',
        rate: '$150/mo',
        prepaid: 'Prepaid Annually or $175/mo',
        category: 'Cash Basis',
        sectionOne: ['Up to 100 Transactions Choose 4 add-ons'],
        sectionTwo: ['Payroll Bookkeeping', 'Tracking multiple revenue', 'Tracking reimbursement to clients or employees', 'Accounting for loans, leases, or lines of credit']   
    },
    {
        title: 'START-UP',
        rateType: 'Monthly Rate',
        rate: '$250/mo',
        prepaid: 'Prepaid Annually or $270/mo',
        category: 'Accrual Basis',
        sectionOne: ['Up to 50 Transactions', 'Monthly Bookkeeping', 'Annual Financial Statements', 'Annual Financial Review', 'Monthly Bank and Credit Card Reconciliation', 'HST Filing'],
        sectionTwo: ['Cloud Storage for Documents', 'Payroll Processing - Up to 2 Employees', 'Unlimited Support', 'QBO, Xero, Wave or Freshbooks', 'Setup & Training', '-', '-']   
    },
    {
        title: 'GROWING',
        rateType: 'Monthly Rate',
        rate: '$400/mo',
        prepaid: 'Prepaid Annually or $430/mo',
        category: 'Accrual Basis',
        sectionOne: ['Up to 100 Transactions', 'Bi-Weekly Bookkeeping', 'Semi-Annual Financial Statements', 'Semi-Annual Financial Review', 'Monthly Bank and Credit Card Reconciliation', 'HST Filing'],
        sectionTwo: ['Cloud Storage for Documents', 'Payroll Processing - Up to 5 Employees', 'Unlimited Support', 'QBO, Xero, Wave or Freshbooks', 'Setup & Training', 'A/R & A/P Processing', 'Additional Financial Reports']   
    },
    {
        title: 'ESTABLISHED',
        rateType: 'Monthly Rate',
        rate: '$550/mo',
        prepaid: 'Prepaid Annually or $600/mo',
        category: 'Accrual Basis',
        sectionOne: ['Up to 150 Transactions', 'Weekly Bookkeeping', 'Quarterly Financial Statements', 'Quarterly Financial Review', 'Monthly Bank and Credit Card Reconciliation', 'HST Filing'],
        sectionTwo: ['Cloud Storage for Documents', 'Payroll Processing - Up to 10 Employees', 'Unlimited Support', 'QBO, Xero, Wave or Freshbooks', 'Setup & Training', 'A/R & A/P Processing', 'Additional Financial Reports']   
    },
    {
        title: 'FULL TIME',
        rateType: 'Hourly Rate',
        rate: '$30/Hour CAD',
        prepaid: '160 Hours per Month'   
    },
    {
        title: 'PART TIME',
        rateType: 'Hourly Rate',
        rate: '$40/Hour CAD',
        prepaid: '80 to 159 Hours per Month'   
    },
    {
        title: 'HOURLY',
        rateType: 'Hourly Rate',
        rate: '$45/Hour CAD',
        prepaid: '25 to 79 Hours per Month'   
    }
]

const State : StateType = {
    title: 'Tsurikoff Consulting',
    sections: [
        {
            title: 'About Us',
            id: 'aboutUs',
            content: []
        },
        {
            title: 'Services',
            id: 'services',
            content: [
                'Inventory management',
                'Budgeting',
                'Bookkeeping for start-ups, small to medium size businesses',
                'Payroll services',
                'Back office services',
                'GST/PST filing',
                'Management reports',
                'Work Safe BC fillings'         
            ]
        },
        {
            title: 'Key Technologies',
            id: 'keyTechnologies',
            content: [
                'Cloud-based systems',
                'Video conferencing',
                'QuickBooks (Certified Accountant and Certified ProAdvisor)',
                'QuickBooks Payroll',
                'Dexte',
                'Rise Payroll',
                'Shopify'
            ]
        },
        {
            title: 'Pricing',
            id: 'pricing',
            content: pricingData
        },
        {
            title: 'Contact Us',
            id: 'contactUs',
            content: []
        },
    ]
}




export default State;

