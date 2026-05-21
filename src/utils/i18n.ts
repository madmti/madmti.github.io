export type Lang = 'es' | 'en';

const i18n = {
	es: {
		sections: {
			biografia: 'Biografia',
			proyectos: 'Proyectos',
			otros: 'Otros recursos'
		},
		sidebar: {
			navigation: 'Navegación',
			theme: 'Tema',
			language: 'Idioma',
			dark: 'oscuro',
			light: 'claro'
		},
		banner: {
			items: [
				{ label: 'Estado', value: 'EN LINEA', color: 'text-primary' },
				{ label: 'Enfoque', value: 'SOFTWARE Y DATOS', color: 'text-content' },
				{ label: 'Ubicación', value: 'CHILE - V REGION', color: 'text-content' },
				{ label: 'Versión', value: 'v3.0.0', color: 'text-content' }
			],
			activityLog: 'Registro de actividad',
			pulse: 'Pulso: Activo',
			lessActive: 'Menos activo',
			moreActive: 'Más activo'
		},
		carousel: {
			prev: 'Anterior',
			next: 'Siguiente',
			activityLog: 'Registro de actividad',
			pulse: 'Pulso: Activo',
			lessActive: 'Menos activo',
			moreActive: 'Más activo'
		}
	},
	en: {
		sections: {
			biografia: 'Biography',
			proyectos: 'Projects',
			otros: 'Other resources'
		},
		sidebar: {
			navigation: 'Navigation',
			theme: 'Theme',
			language: 'Language',
			dark: 'dark',
			light: 'light'
		},
		banner: {
			items: [
				{ label: 'Status', value: 'ONLINE', color: 'text-primary' },
				{ label: 'Focus', value: 'SOFTWARE & DATA', color: 'text-content' },
				{ label: 'Location', value: 'CHILE - V REGION', color: 'text-content' },
				{ label: 'Version', value: 'v3.0.0', color: 'text-content' }
			],
			activityLog: 'Activity Log',
			pulse: 'Pulse: Active',
			lessActive: 'Less active',
			moreActive: 'More active'
		},
		carousel: {
			prev: 'Prev',
			next: 'Next',
			activityLog: 'Activity Log',
			pulse: 'Pulse: Active',
			lessActive: 'Less active',
			moreActive: 'More active'
		}
	}
} as const;

export const getI18n = (lang: Lang) => i18n[lang];
