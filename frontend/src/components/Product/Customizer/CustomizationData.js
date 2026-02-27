export const CUSTOMIZATION_OPTIONS = {
    Shirt: [
        {
            id: 'collar',
            label: 'Collar',
            type: 'card',
            choices: [
                { id: 'classic', label: 'Classic', recommended: true },
                { id: 'spread', label: 'Spread' },
                { id: 'button-down', label: 'Button-down' },
            ]
        },
        {
            id: 'cuffs',
            label: 'Cuffs',
            type: 'toggle',
            choices: [
                { id: 'single', label: 'Single', recommended: true },
                { id: 'double', label: 'Double' },
                { id: 'french', label: 'French' },
            ]
        },
        {
            id: 'fit',
            label: 'Fit',
            type: 'toggle',
            choices: [
                { id: 'regular', label: 'Regular', recommended: true },
                { id: 'slim', label: 'Slim' },
                { id: 'relaxed', label: 'Relaxed' },
            ]
        },
        {
            id: 'pockets',
            label: 'Pockets',
            type: 'toggle',
            choices: [
                { id: 'none', label: 'None', recommended: true },
                { id: 'single', label: 'Single' },
            ]
        },
        {
            id: 'fabric',
            label: 'Fabric',
            type: 'card',
            choices: [
                { id: 'egyptian', label: 'Egyptian Cotton' },
                { id: 'linen', label: 'Italian Linen' },
                { id: 'oxford', label: 'Oxford' },
            ]
        },
        {
            id: 'color',
            label: 'Color',
            type: 'swatch',
            choices: [
                { id: 'white', label: 'White', color: '#ffffff' },
                { id: 'blue', label: 'Blue', color: '#87CEEB' },
                { id: 'black', label: 'Black', color: '#000000' },
                { id: 'pink', label: 'Pink', color: '#FFC0CB' },
                { id: 'navy', label: 'Navy', color: '#000080' },
            ]
        }
    ],
    Pant: [
        {
            id: 'fit',
            label: 'Fit',
            type: 'toggle',
            choices: [
                { id: 'regular', label: 'Regular', recommended: true },
                { id: 'slim', label: 'Slim' },
            ]
        },
        {
            id: 'pleats',
            label: 'Pleats',
            type: 'toggle',
            choices: [
                { id: 'no', label: 'No Pleats', recommended: true },
                { id: 'yes', label: 'Pleated' },
            ]
        },
        {
            id: 'color',
            label: 'Color',
            type: 'swatch',
            choices: [
                { id: 'black', label: 'Black', color: '#000000' },
                { id: 'grey', label: 'Grey', color: '#808080' },
                { id: 'navy', label: 'Navy', color: '#000080' },
                { id: 'beige', label: 'Beige', color: '#f5f5dc' },
            ]
        }
    ],
    Blazer: [
        {
            id: 'lapel',
            label: 'Lapel Style',
            type: 'card',
            choices: [
                { id: 'classic', label: 'Classic Notch', recommended: true },
                { id: 'peak', label: 'Peak Lapel' },
            ]
        },
        {
            id: 'buttons',
            label: 'Button Config',
            type: 'toggle',
            choices: [
                { id: 'single', label: 'Single Breasted', recommended: true },
                { id: 'double', label: 'Double Breasted' },
            ]
        },
        {
            id: 'color',
            label: 'Color',
            type: 'swatch',
            choices: [
                { id: 'navy', label: 'Navy', color: '#000080' },
                { id: 'black', label: 'Black', color: '#000000' },
                { id: 'charcoal', label: 'Charcoal', color: '#36454f' },
            ]
        }
    ]
};
// Fallback for types not explicitly defined
CUSTOMIZATION_OPTIONS['T-shirt'] = [
    {
        id: 'neck',
        label: 'Neckline',
        type: 'card',
        choices: [
            { id: 'crew', label: 'Crew Neck', recommended: true },
            { id: 'polo', label: 'Polo' }
        ]
    },
    {
        id: 'sleeve',
        label: 'Sleeve Length',
        type: 'toggle',
        choices: [
            { id: 'half', label: 'Half Sleeve', recommended: true },
            { id: 'full', label: 'Full Sleeve' }
        ]
    }
];
