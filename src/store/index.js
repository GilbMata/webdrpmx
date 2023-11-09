import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      lang: 'en'
    },
    contact: {
      url: 'https://drp.tepachesoft.com/api/contact.php',
      recaptchaSiteKey: '6Ld6QTglAAAAAC0FzZPALiJY7AFneD3PCED3f1Ks',
      recaptchaSiteKeyDRP: '6Le9eLAoAAAAAOTTGE-3jYYwk6asjHsacj9bdUfN',
      recaptchaSiteKeyDRP2: '6LftbrAoAAAAAJ49zfYXN9yCFIV5PBLoVNm8R9SR',
    },
    content: {
      es: {
        topNav: {
          home: 'Inicio',
          services: 'Soluciones',
          us: 'Nosotros',
          talent: 'Talento',
          support: 'Soporte',
          contact: 'Contácto',          
          partners: 'Socios',
        },
        bottomNav: {
          copy: '© 2023 DRP de México, Todos los derechos reservados',
          privacy: 'Aviso de privacidad',
          sla: 'SLA',
          uap: 'UAP',
          terms: 'Términos',
          agree: 'Acuerdos'
        },
        home: {
          learnMore: 'Ver más',
          goBack: 'Volver',
          ourServices: 'Nuestras soluciones',
          certified: 'Certificaciones',
          ourCustomers: 'Nuestros clientes',
          successCases: 'Casos de éxito',
          freeTrial: 'Prueba gratis',
          slider: {
            page1: {
              title: 'Make IT simple',
              sub: `Nube, Conectividad y Seguridad con DRPMéxico`
            },
            page2: {
              title: 'Migre a la nube de confianza',
              sub: `DRP lo ayuda a calcular los recursos de la nube que su empresa realmente necesita`,
            },
            page3: {
              title: 'Únete a la #NubeMasSegura',
              sub: `Mas de 15 años de experiencia nos avalan`,
              yearsOfExperience: 'Años de experiencia',
            }
          },
          
          partners:[{
            id: 'partners',
            name: 'Portal',
            path: 'https://partners.drpmexico.com',            
            url: 'https://partners.drpmexico.com',
          }],
          services: [
            {
                id: 'baas',
                abbr: 'BaaS', 
                name: 'Backup as a Service',
                sub: 'Proteja sus datos dondequiera que residan, recupérelo rápidamente con un Backup.',
                tab: '¿Qué es BaaS?',
                description: 'DRPMéxico Backup as a Service está diseñado para ayudar a proteger sus datos críticos de amenazas de ciberseguridad internas y externas, cumplir con sus requisitos de retención a largo plazo y a modernizar su estrategia de respaldo.',
                icon: require('@/assets/img/icons/baas.svg'),
                lottie: require(`@/assets/lotties/backup.json`),
                heroImage: require(`@/assets/img/misc/hero_bass.jpg`),
                path: '/services/baas',
                content: {
                  features: {
                    title: 'Características',
                    list: [
                      {
                        id: 1,
                        name: 'Tecnología lider en la industria',
                        description: 'Los servicios DRPMéxico Backup se basan en tecnología comprobada de proveedores como VMware, HPE y Cisco. Este diseño coherente de nivel empresarial nos permite ofrecer una experiencia coherente desde todas nuestras regiones de nube en todo el mundo para respaldar las necesidades de rendimiento, diversidad geográfica, soberanía de datos y redundancia.',
                        image: require('@/assets/img/features/baas/1.png'),
                        selected: true,
                      },
                      {
                        id: 2,
                        name: 'Protección interna',
                        description: 'En conjunto con Veeam Cloud Connect brinda protección mejorada contra amenazas internas y externas, incluidos muchos tipos de ransomware. Un repositorio aislado para sus copias de seguridad. Estos archivos se conservarán en esta ubicación aislada y se pueden guardar y volver a transferir una vez que estén listos para restaurar los datos.',
                        image: require('@/assets/img/features/baas/2.png'),
                        selected: false,
                      },
                      {
                        id: 3,
                        name: 'Seguridad incorporada',
                        description: 'Incluye seguridad administrada y seleccionada para fines específicos en todo su entorno de protección de datos.',
                        image: require('@/assets/img/features/baas/3.png'),
                        selected: false,
                      },
                      {
                        id: 4,
                        name: 'Equipo de cumplimiento',
                        description: 'Proporcionar documentación de auditoría, interpretar los requisitos reglamentarios y responder preguntas de seguridad puede resultar confuso. Para ayudar a que la transición a la nube sea más fácil desde el punto de vista del cumplimiento y para ayudarlo a abordar sus requisitos normativos específicos de la industria y/o su ubicación geográfica.',
                        image: require('@/assets/img/features/baas/4.png'),
                        selected: false,
                      },
                      {
                        id: 5,
                        name: 'Estrategía y diseño',
                        description: 'Reduzca su costo total de protección de datos. DRPMéxico comprende la importancia y los desafíos de migrar a la nube sin interrupciones. Logre su estrategia de copia de seguridad fuera del sitio con menos tiempo, complejidad y costo.',
                        image: require('@/assets/img/features/baas/5.png'),
                        selected: false,
                      },
                      {
                        id: 6,
                        name: 'Incorporación e implementación',
                        description: 'Para ayudarlo a simplificar su migración a la nube, DRPMéxico adopta un enfoque integral para migrar datos al incluir un administrador de proyectos dedicado e ingenieros de servicios en la nube para garantizar que los datos se migren de manera segura.',
                        image: require('@/assets/img/features/baas/6.png'),
                        selected: false,
                      }
                    ]
                  },
                  benefits: {
                    title: 'Beneficios',
                    list: [
                      {
                        id: 1,
                        name: 'Reduce costos de adquisición',
                        image: require('@/assets/img/benefits/baas/1.svg'),
                      },
                      {
                        id: 2,
                        name: 'Recupera fácilmente tus datos',
                        image: require('@/assets/img/benefits/baas/2.svg'),
                      },
                      {
                        id: 3,
                        name: 'Seguridad de punto a punto',
                        image: require('@/assets/img/benefits/baas/3.svg'),
                      },
                      {
                        id: 4,
                        name: 'RPO flexible',
                        image: require('@/assets/img/benefits/baas/4.svg'),
                      },
                    ],
                  },
                  architecture: {
                    title: '¿Como funciona?',
                    diagram: require('@/assets/img/architecture/baas/diagram.png'),
                    steps: [
                      {
                        id: 1,
                        name: 'Some title',
                        description: 'Lorem ipsum cohem apsilum hico conu jichuro',
                        image: require('@/assets/img/architecture/baas/1.svg'),
                      },
                      {
                        id: 2,
                        name: 'Some title',
                        description: 'Lorem ipsum cohem apsilum hico conu jichuro',
                        image: require('@/assets/img/architecture/baas/2.svg'),
                      },
                      {
                        id: 3,
                        name: 'Some title',
                        description: 'Lorem ipsum cohem apsilum hico conu jichuro',
                        image: require('@/assets/img/architecture/baas/3.svg'),
                      },
                      {
                        id: 4,
                        name: 'Some title',
                        description: 'Lorem ipsum cohem apsilum hico conu jichuro',
                        image: require('@/assets/img/architecture/baas/4.svg'),
                      },
                    ]
                  },
                  freeTrial: {
                    title: 'Prueba gratis',
                    start: '¡Comienza tu prueba!',
                    pros: [
                      'No se requiere tarjeta de crédito',
                      'Sin cargo, sin riesgo, sin complicaciones durante 30 días',
                      'Configuración guiada y soporte 24x7',
                    ]
                  }
                }
            },
            {
                id: 'draas',
                abbr: 'DRaaS',
                name: 'Disaster Recovery as a Service',
                sub: 'Líder en la industria para proteger sus aplicaciones críticas del tiempo de inactividad no planificado y garantizar la viabilidad a largo plazo de su negocio.',
                tab: '¿Qué es Draas?',
                description: 'DRPMéxico DRaaS Integrado con Veeam y VMware, en conjunto proporcionan las capacidades de seguridad, replicación y conmutación por error que necesita para garantizar que su empresa esté siempre en línea y disponible.',
                icon: require('@/assets/img/icons/draas.svg'),
                lottie: require(`@/assets/lotties/restorage.json`),
                heroImage: require(`@/assets/img/misc/hero_draas.jpg`),
                path: '/services/draas',
                content: {
                  features: {
                    title: 'Características',
                    list: [
                      {
                        id: 1,
                        name: 'Tecnología lider en la industria',
                        description: '4 veces "Líder" consecutivo en el Cuadrante Mágico de Gartner para Recuperación ante Desastres como Servicio (DRaaS).',
                        image: require('@/assets/img/features/draas/1.png'),
                        selected: true,
                      },
                      {
                        id: 2,
                        name: 'Diseño flexible e individual',
                        description: 'Nuestros ingenieros experimentados en recuperación ante desastres lo ayudarán a guiarlo a través de todo el proceso, desde el diseño hasta la implementación, desde el primer clic hasta la conmutación por error. DRPMéxico DRaaS le permite replicar todas sus aplicaciones y cargas de trabajo de TI desde nubes públicas o privadas, y tanto para entornos físicos como virtuales, a nuestra plataforma de nube comprobada basada en VMware.',
                        image: require('@/assets/img/features/draas/2.png'),
                        selected: false,
                      },
                      {
                        id: 3,
                        name: 'Gestión unificada en la nube',
                        description: 'Con DRPMéxico DRaaS y Veeam, obtiene una gestión de recuperación ante desastres totalmente integrada dentro de nuestro Cloud. La consola brinda administración, control y visibilidad en todos los servicios de DRP, incluidas las nubes públicas y privadas, la protección de datos y la recuperación ante desastres.',
                        image: require('@/assets/img/features/draas/3.png'),
                        selected: false,
                      },
                      {
                        id: 4,
                        name: 'Tecnologías basadas en VMware',
                        description: 'DRaaS, como todos los servicios de DRPMéxico, se basa en tecnología comprobada de VMware. Con VMware, le permite realizar una conmutación por error y una conmutación por recuperación rápidamente durante y después del evento de desastre sin tener que convertir sus aplicaciones a un nuevo formato operativo.',
                        image: require('@/assets/img/features/draas/4.png'),
                        selected: false,
                      },
                      {
                        id: 5,
                        name: 'Copia de seguridad opcional',
                        description: 'Para garantizar que su solución DRaaS esté lista para la producción cuando sea necesario, DRPMéxico incluye servicios de protección de datos integrados. Esto agrega otra capa de confianza de que los datos están protegidos y seguros en caso de falla del hardware u otros eventos internos o externos',
                        image: require('@/assets/img/features/draas/5.png'),
                        selected: false,
                      },
                      {
                        id: 6,
                        name: 'Estrategía y diseño',
                        description: 'DRPMéxico proporciona servicios de planificación y diseño en la nube que aprovechan nuestra herramienta de evaluación del entorno, que se utiliza para modelar y garantizar que se cumplan los requisitos de rendimiento de la aplicación antes de la implementación de DRaaS.',
                        image: require('@/assets/img/features/draas/6.png'),
                        selected: false,
                      },
                      {
                        id: 7,
                        name: 'Incorporación e implementación',
                        description: 'El viaje a la nube es tan importante como el destino. En DRPMéxico comprende la importancia y los desafíos de implementar DRaaS sin interrupciones. No todas las empresas tienen los recursos internos o el tiempo para incorporar e implementar servicios DRaaS de manera eficiente.',
                        image: require('@/assets/img/features/draas/7.png'),
                        selected: false,
                      }
                    ]
                  },
                  benefits: {
                    title: 'Beneficios',
                    list: [
                      {
                        id: 1,
                        name: 'Fácil implementación',
                        image: require('@/assets/img/benefits/draas/1.svg'),
                      },
                      {
                        id: 2,
                        name: 'Transferencia segura de información',
                        image: require('@/assets/img/benefits/draas/2.svg'),
                      },
                      {
                        id: 3,
                        name: 'Rápida recuperación',
                        image: require('@/assets/img/benefits/draas/3.svg'),
                      },
                      {
                        id: 4,
                        name: 'RPO flexible',
                        image: require('@/assets/img/benefits/draas/4.svg'),
                      },
                      {
                        id: 5,
                        name: 'Rendimiento',
                        image: require('@/assets/img/benefits/draas/5.svg'),
                      },
                    ],
                  },
                  architecture: {
                    title: '¿Como funciona?',
                    diagram: require('@/assets/img/architecture/draas/diagram.png'),
                  },
                  freeTrial: {
                    title: 'Prueba gratis',
                    start: '¡Comienza tu prueba!',
                    pros: [
                      'No se requiere tarjeta de crédito',
                      'Sin cargo, sin riesgo, sin complicaciones durante 30 días',
                      'Configuración guiada y soporte 24x7',
                    ]
                  }
                }
            },
            {
                id: 'iaas', 
                abbr: 'IaaS',
                name: 'Infrastructure as a Service',
                sub: 'Una solución de nube adecuada para sus cargas de trabajo más críticas',
                tab: '¿Qué es IaaS?',
                description: 'DRPMéxico IaaS proporciona la eficiencia y la escalabilidad de IaaS tradicional, pero con una infraestructura probada basada en VMware, diseñado por expertos, garantizando seguridad integrada y protección de datos. Obtén una experiencia de administración familiar y coherente en todos los entornos, sin la necesidad de rediseñar sus cargas de trabajo, permitiendo migrar, ejecutar y proteger rápidamente sus aplicaciones.',
                icon: require('@/assets/img/icons/iaas.svg'),
                lottie: require(`@/assets/lotties/infrastructure.json`),
                heroImage: require(`@/assets/img/misc/hero_iaas.jpg`),
                path: '/services/iaas',
                content: {
                  features: {
                    title: 'Características',
                    list: [
                      {
                        id: 1,
                        name: 'Tecnología lider en la industria',
                        description: 'Es un servicio que ofrece infraestructura de TI completa, permitiendo a las empresas funcionalidades de computación, cabinas de alm cenamiento, elementos de conectividad y seguridad.',
                        image: require('@/assets/img/features/iaas/1.png'),
                        selected: true,
                      },
                      {
                        id: 2,
                        name: 'Niveles de utilización',
                        description: 'Los recursos de DRPMéxico se compran en bloques que se alinean con el tamaño del servidor, lo que proporciona los niveles más altos de utilización.',
                        image: require('@/assets/img/features/iaas/2.png'),
                        selected: false,
                      },
                      {
                        id: 3,
                        name: 'Satisfacción de necesidades',
                        description: 'Servidores dedicados para satisfacer sus necesidades de aplicaciones más exigentes y requisitos de licencia únicos.',
                        image: require('@/assets/img/features/iaas/3.png'),
                        selected: false,
                      },
                      {
                        id: 4,
                        name: 'Medios de almacenamiento',
                        description: 'Puede aprovechar los medios de almacenamiento adecuados para las necesidades de rendimiento de su aplicación, desde el almacenamiento de objetos hasta todo fash.',
                        image: require('@/assets/img/features/iaas/4.png'),
                        selected: false,
                      },
                      {
                        id: 5,
                        name: 'Estabilidad de recursos',
                        description: 'Puede escalar los recursos informáticos y de almacenamiento de forma independiente, lo que garantiza la optización del rendimiento y los costos de las aplicaciones.',
                        image: require('@/assets/img/features/iaas/5.png'),
                        selected: false,
                      },
                      {
                        id: 6,
                        name: 'Resiliencia N+1',
                        description: 'Modelo de resiliencia N+1 incorporado para garantizar la disponibilidad del sistema en caso de falla de un componente.',
                        image: require('@/assets/img/features/iaas/6.png'),
                        selected: false,
                      }
                    ]
                  },
                  benefits: {
                    title: 'Beneficios',
                    list: [
                      {
                        id: 1,
                        name: 'Eficacia',
                        image: require('@/assets/img/benefits/iaas/1.svg'),
                      },
                      {
                        id: 2,
                        name: 'Flexibilidad',
                        image: require('@/assets/img/benefits/iaas/2.svg'),
                      },
                      {
                        id: 3,
                        name: 'Seguridad',
                        image: require('@/assets/img/benefits/iaas/3.svg'),
                      },
                    ],
                  },
                  architecture: {
                    title: '¿Como funciona?',
                    diagram: require('@/assets/img/architecture/iaas/diagram.png'),
                  },
                  freeTrial: {
                    title: 'Prueba gratis',
                    start: '¡Comienza tu prueba!',
                    pros: [
                      'No se requiere tarjeta de crédito',
                      'Sin cargo, sin riesgo, sin complicaciones durante 30 días',
                      'Configuración guiada y soporte 24x7',
                    ]
                  }
                }
            },
            {
              id: 'm365', 
              abbr: 'M365',
              name: 'Microsoft 365 Backup',
              sub: 'Una solución de nube adecuada para sus cargas de trabajo más críticas',
              tab: '¿Qué es M365?',
              description: 'Microsoft 365 ha cambiado la productividad en el lugar de trabajo para siempre. Pero no se diseñó pensando en la protección de datos. Como resultado, Microsoft 365 proporciona solo capacidades limitadas de retención y protección.',
              icon: require('@/assets/img/icons/m365.svg'),
              lottie: require(`@/assets/lotties/backup.json`),
              heroImage: require(`@/assets/img/misc/hero_m365.jpg`),
              path: '/services/m365',
              content: {
                features: {
                  title: 'Características',
                  list: [
                    {
                      id: 1,
                      name: 'Tecnología lider en la industria',
                      description: 'Protección automática de datos críticos de Microsoft 365, incluidos Exchange Online, SharePoint Online, OneDrive for Business y Microsoft Teams',
                      image: require('@/assets/img/features/m365/1.png'),
                      selected: true,
                    },
                    {
                      id: 2,
                      name: 'Precios simples',
                      description: 'Hemos hecho que Veeam Backup para Office365 sea lo más simple posible. Solo paga una tarifa baja por usuario y almacenamiento, nada más.',
                      image: require('@/assets/img/features/m365/2.png'),
                      selected: false,
                    },
                    {
                      id: 3,
                      name: 'Integración completa con Veam',
                      description: 'Cuando ejecuta Veeam Availability Suite en su nube privada local, ahora puede seleccionar DRPMéxico como destino para sus copias de seguridad fuera del sitio.',
                      image: require('@/assets/img/features/m365/3.png'),
                      selected: false,
                    },
                    {
                      id: 4,
                      name: 'Configuración en minutos',
                      description: 'A los pocos minutos de registrarse en DRPMéxico, podrá utilizar su servicio. Adapte la cantidad de almacenamiento que desea y luego comience a realizar copias de seguridad. Sin espera.',
                      image: require('@/assets/img/features/m365/4.png'),
                      selected: false,
                    },
                    {
                      id: 5,
                      name: 'Sin cargos por transferencia de datos',
                      description: 'Utilice DRPMéxico como su proveedor de Veeam Backup y no incurrirá en ningún cargo por transferencia de datos de nuestra parte. Copia de seguridad y restauración tanto como quieras.',
                      image: require('@/assets/img/features/m365/5.png'),
                      selected: false,
                    },
                  ]
                },
                benefits: {
                  title: 'Beneficios',
                  list: [
                    {
                      id: 1,
                      name: 'Eliminación accidental o corrupción de información',
                      image: require('@/assets/img/benefits/m365/1.svg'),
                    },
                    {
                      id: 2,
                      name: 'Amenazas internas y externas',
                      image: require('@/assets/img/benefits/m365/2.svg'),
                    },
                    {
                      id: 3,
                      name: 'Cumplimiento legal y brechas de retención',
                      image: require('@/assets/img/benefits/m365/3.svg'),
                    },
                  ],
                },
                architecture: {
                  title: '¿Como funciona?',
                  diagram: require('@/assets/img/architecture/m365/diagram.png'),
                },
                freeTrial: {
                  title: 'Prueba gratis',
                  start: '¡Comienza tu prueba!',
                  pros: [
                    'No se requiere tarjeta de crédito',
                    'Sin cargo, sin riesgo, sin complicaciones durante 30 días',
                    'Configuración guiada y soporte 24x7',
                  ]
                }
              }
          },
          ],
          cta1: {
            sub: 'Nuestro diferenciador',
            title: 'Migre a la nube de confianza',
            description: `DRPMéxico ofrece la red e infraestructura más avanzada de soluciones disponibles en el mercado actual, brindando a nuestros clientes con una única plataforma para ofrecer nube, conectividad y seguridad.`
          },
          successStories: [
            {
              id: 'carnesViba',
              customer: 'Carnes ViBa',
              description: 'Nuestro Cliente sufrió lamentablemente un ataque de ramsomware, pero gracias a nuestras soluciones pudimos evitar que pagara millones de rescate, entregándole sus datos y devolviéndoles su operación a través de nuestros servicios de BaaS con Veeam Backup.',
              link: 'https://www.veeam.com/success-stories/carnesviba.html',
              image: require('@/assets/img/customers/carnes_viba.png'),

            },
            {
              id: 'upSivale',
              customer: 'UP Si Vale',
              description: 'Pudo mejorar su política de respaldos aplicando la regla del 3,2,1 llevando sus réplicas a la nube y habilitando su Disaster Recovery Plan en sus servicios más críticos. Así, consiguieron alta disponibilidad de datos y servicios ahorrando adicionalmente, un 30% de velocidad en sus almacenamientos primarios, mejorando los tiempos de respaldos y aumentando x 10 los tiempos de restauración.',
              link: 'https://www.veeam.com/es-lat/success-stories/si-vale.html',
              image: require('@/assets/img/customers/up_sivale.png')
            }
          ],
          customers: [
            {
              name: 'PegaDuro',
              logo: require('@/assets/img/customers/pegaduro.png'),
            },
            {
              name: 'HINO',
              logo: require('@/assets/img/customers/hino.png'),
            },
            {
              name: 'San Pablo Farmacia',
              logo: require('@/assets/img/customers/san_pablo.png'),
            },
            {
              name: 'Infra del sur',
              logo: require('@/assets/img/customers/infra_delsur.png'),
            },
            {
              name: 'Farmacias Similares',
              logo: require('@/assets/img/customers/similares.png'),
            },
            {
              name: 'Carnes Viba',
              logo: require('@/assets/img/customers/carnes_viba.png'),
            },
            {
              name: 'UP Sí Vale',
              logo: require('@/assets/img/customers/up_sivale.png'),
            }
          ],
        },
        services: {
          title: `Soluciones <span class="d-block text-primary text-display-5 text-semi-heavy">DRP</span>`,
          description: `
            ¿Ya conoces nuestro portafolio de servicios? <br>
            ¡Garantiza la seguridad y disponibilidad de tu <br> 
            información con las soluciones de nube que <br>
            DRPMéxico tiene para TI!
          `,
        },
        aboutUs: {
          ctaTitle: `Nube, Conectividad y Seguridad con <span class="text-primary">DRP</span>México.`,
          ctaDescription: 'Nos enfocamos en simplificar cada paso de tu viaje hacia el Cloud. Te acompañamos en cada etapa de tu implementación en la nube, con soporte 24/7 para garantizar que se cumplan las expectativas de tu negocio.',
          whatIs: '¿Qué es DRP México?',
          focusDrp: 'El enfoque de DRP México',
          focusItems: [
            {
              id: 1,
              icon: require('@/assets/img/icons/circle_check.svg'),
              title: 'TECNOLOGÍA APROBADA',
              description: 'Cuando el rendimiento y la seguridad son críticos, la tecnología subyacente importa. Por esta razón, DRPMéxico se creó desde cero con tecnología comprobada de VMware, Cisco y otros.',
            },
            {
              id: 2,
              icon: require('@/assets/img/icons/shield.svg'),
              title: 'SEGURIDAD INTEGRADA',
              description: 'El enfoque de seguridad garantiza que los datos estén protegidos en múltiples niveles, incluida la seguridad física, la seguridad lógica, el proceso y las certificaciones de terceros.',
            },
            {
              id: 3,
              icon: require('@/assets/img/icons/cog_clock.svg'),
              title: 'CUMPLIMIENTO GLOBAL',
              description: 'Para apoyar a nuestros clientes, DRPMéxico mantiene un equipo dedicado de expertos para consultar sobre requisitos geográficos e industriales individuales, además de una variedad de certificaciones y atestaciones.',
            },
            {
              id: 4,
              icon: require('@/assets/img/icons/support_message.svg'),
              title: 'SOPORTE 24/7',
              description: 'Antes, durante y después de su implementación en la nube, DRPMéxico está listo con soporte 24 × 7 para garantizar que se cumplan las expectativas de su negocio y aplicación.',
            }
          ],
        },
        contact: {
          followUs: 'Siguenos',
          phone: '+52 (55) 89 95 54 00',
          address: {
            mapUrl: 'https://goo.gl/maps/49jgNx6UsYz7bDuU9',
            street: 'López Mateos Sur 7000, Tlajomulco de Zúñiga, Mexico'
          },
          email: 'sales@drpmexico.com',
          links: [
            {
              icon: require('@/assets/img/social_nets/facebook.png'),
              name: 'drpmexico',
              url: 'https://www.facebook.com/drpmexico/',
            },
            {
              icon: require('@/assets/img/social_nets/instagram.png'),
              name: '@drp_mexico',
              url: 'https://www.instagram.com/drp_mexico/',
            },
            {
              icon: require('@/assets/img/social_nets/linkedin.png'),
              name: 'drpmexico',
              url: 'https://www.linkedin.com/company/drpmexico/',
            },
            {
              icon: require('@/assets/img/social_nets/twitter.png'),
              name: 'drpmexico',
              url: 'https://twitter.com/drpmexico',
            },
          ],
          form: {
            cta: 'Dejanos una nota',
            ctaSub: 'Clientes potenciales o existentes, estamos aquí para responderte o resolver tus dudas.',
            thank: '¡Gracias!',
            thanksub: 'En breve nos pondremos en contacto contigo',
            title: 'Llena el formulario y te contáctaremos enseguida',
            isLoading: 'Cargando',
            successMessage: 'Recibimos tu mensaje, te contáctaremos en breve!',
            failMessage: 'Hubó un error al mandar el mensaje, intentalo de nuevo',
            recaptchaUncheked: 'Confirma que no eres un robot',
            fields: {
              name: 'Nombre',
              company: 'Empresa',
              position: 'Puesto',
              phone: 'Teléfono',
              mail: 'Correo',
              message: 'Mensaje',
              submit: 'Enviar',
            }
          },
        },
        notFound: {
          message: 'Parece que te has perdido. Descuida, siempre puedes',
          goBack: 'Volver al inicio'
        }
      },
      en: {
        topNav: {
          home: 'Home',
          services: 'Solutions',
          us: 'About us',
          talent: 'Talent',
          support: 'Support',
          contact: 'Contact',
          partners: 'Partners',
        },
        bottomNav: {
          copy: '© 2023 DRP de México, All rights reserved',
          privacy: 'Privacy notice',
          sla: 'SLA',
          uap: 'UAP',
          terms: 'Terms',
          agree: 'Agreement'
        },
        home: {
          learnMore: 'Learn more',
          goBack: 'Go back',
          ourServices: 'Our solutions',
          certified: 'Certifications',
          ourCustomers: 'Our customers',
          successCases: 'Success Stories',
          freeTrial: 'Free trial',
          slider: {
            page1: {
              title: 'Make IT simple',
              sub: `Cloud, Connectivity and Security with DRPMéxico`
            },
            page2: {
              title: 'Move to the trusted cloud',
              sub: `DRP helps you calculate the cloud resources your business really needs`,
            },
            page3: {
              title: 'Join the #SafestCloud',
              sub: `More than 15 years of experience guarantee us`,
              yearsOfExperience: 'Years of experience',
            }
          },
          partners:[{
            id: 'partners',
            name: 'Portal',
            path: 'https://partners.drpmexico.com',
            url: 'https://partners.drpmexico.com',
            
          }],
          services: [
            {
                id: 'baas',
                abbr: 'BaaS', 
                name: 'Backup as a Service',
                sub: 'Protect your data wherever it resides, recover it quickly with a Backup.',
                tab: 'What is BaaS?',
                description: 'DRPMéxico Backup as a Service is designed to help protect your critical data from internal and external cybersecurity threats, meet your long-term retention requirements, and modernize your backup strategy.',
                icon: require('@/assets/img/icons/baas.svg'),
                lottie: require(`@/assets/lotties/backup.json`),
                heroImage: require(`@/assets/img/misc/hero_bass.jpg`),
                path: '/services/baas',
                content: {
                  features: {
                    title: 'Features',
                    list: [
                      {
                        id: 1,
                        name: 'Industry leading technology',
                        description: 'DRPMéxico Backup services are based on proven technology from vendors such as VMware, HPE and Cisco. This consistent, enterprise-grade design enables us to deliver a consistent experience from all of our cloud regions around the world to support performance, geographic diversity, data sovereignty, and redundancy needs.',
                        image: require('@/assets/img/features/baas/1.png'),
                        selected: true,
                      },
                      {
                        id: 2,
                        name: 'Internal protection',
                        description: 'Together with Veeam Cloud Connect it provides enhanced protection against internal and external threats, including many types of ransomware. An isolated repository for your backups. These files will be kept in this isolated location and can be saved and transferred again once you are ready to restore the data.',
                        image: require('@/assets/img/features/baas/2.png'),
                        selected: false,
                      },
                      {
                        id: 3,
                        name: 'Built-in security',
                        description: 'Includes curated and managed security for ad hoc purposes across your entire data protection environment.',
                        image: require('@/assets/img/features/baas/3.png'),
                        selected: false,
                      },
                      {
                        id: 4,
                        name: 'Compliance team',
                        description: 'Providing audit documentation, interpreting regulatory requirements, and answering security questions can be confusing. To help make your transition to the cloud easier from a compliance standpoint and to help you address your specific industry regulatory requirements and/or geographic location.',
                        image: require('@/assets/img/features/baas/4.png'),
                        selected: false,
                      },
                      {
                        id: 5,
                        name: 'Strategy and design',
                        description: 'Lower your total cost of data protection. DRPMéxico understands the importance and challenges of migrating to the cloud without interruptions. Achieve your offsite backup strategy with less time, complexity, and cost.',
                        image: require('@/assets/img/features/baas/5.png'),
                        selected: false,
                      },
                      {
                        id: 6,
                        name: 'Onboarding and Implementation',
                        description: 'To help you simplify your migration to the cloud, DRPMéxico takes a comprehensive approach to migrating data by including a dedicated project manager and cloud services engineers to ensure data is migrated securely.',
                        image: require('@/assets/img/features/baas/6.png'),
                        selected: false,
                      }
                    ]
                  },
                  benefits: {
                    title: 'Benefits',
                    list: [
                      {
                        id: 1,
                        name: 'Reduce acquisition costs',
                        image: require('@/assets/img/benefits/baas/1.svg'),
                      },
                      {
                        id: 2,
                        name: 'Easily recover your data',
                        image: require('@/assets/img/benefits/baas/2.svg'),
                      },
                      {
                        id: 3,
                        name: 'End-to-end security',
                        image: require('@/assets/img/benefits/baas/3.svg'),
                      },
                      {
                        id: 4,
                        name: 'Flexible RPO',
                        image: require('@/assets/img/benefits/baas/4.svg'),
                      },
                    ],
                  },
                  architecture: {
                    title: 'How it works?',
                    diagram: require('@/assets/img/architecture/baas/diagram.png'),
                  },
                  freeTrial: {
                    title: 'Free trial',
                    start: 'Start now!',
                    pros: [
                      'No credit card required',
                      'No charge, no risk, no hassle for 30 days',
                      'Guided setup and 24x7 support',
                    ]
                  }
                }
            },
            {
                id: 'draas',
                abbr: 'DRaaS',
                name: 'Disaster Recovery as a Service',
                sub: 'Industry leader in protecting your critical applications from unplanned downtime and ensuring the long-term viability of your business.',
                tab: 'What is Draas?',
                description: 'DRPMéxico DRaaS Integrated with Veeam and VMware, together they provide the security, replication, and failover capabilities you need to ensure your business is always online and available.',
                icon: require('@/assets/img/icons/draas.svg'),
                lottie: require(`@/assets/lotties/restorage.json`),
                heroImage: require(`@/assets/img/misc/hero_draas.jpg`),
                path: '/services/draas',
                content: {
                  features: {
                    title: 'Features',
                    list: [
                      {
                        id: 1,
                        name: 'Industry leading technology',
                        description: '4 times consecutive "Leader" in the Gartner Magic Quadrant for Disaster Recovery as a Service (DRaaS).',
                        image: require('@/assets/img/features/draas/1.png'),
                        selected: true,
                      },
                      {
                        id: 2,
                        name: 'Flexible and individual design',
                        description: 'Our experienced disaster recovery engineers will help guide you through the entire process, from design to deployment, from first click to failover. DRPMéxico DRaaS allows you to replicate all your applications and IT workloads from public or private clouds, and for both physical and virtual environments, to our proven cloud platform based on VMware.',
                        image: require('@/assets/img/features/draas/2.png'),
                        selected: false,
                      },
                      {
                        id: 3,
                        name: 'Unified management in the cloud',
                        description: 'With DRPMéxico DRaaS and Veeam, you get fully integrated disaster recovery management within our Cloud. The console provides management, control, and visibility across all DRP services, including public and private clouds, data protection, and disaster recovery.',
                        image: require('@/assets/img/features/draas/3.png'),
                        selected: false,
                      },
                      {
                        id: 4,
                        name: 'VMware-based technologies',
                        description: 'DRaaS, like all DRPMéxico services, is based on proven VMware technology. With VMware, it enables you to quickly fail over and fail back during and after the disaster event without having to convert your applications to a new operating format.',
                        image: require('@/assets/img/features/draas/4.png'),
                        selected: false,
                      },
                      {
                        id: 5,
                        name: 'Optional backup',
                        description: 'To ensure that your DRaaS solution is production-ready when needed, DRPMéxico includes built-in data protection services. This adds another layer of confidence that data is protected and secure in the event of hardware failure or other internal or external events.',
                        image: require('@/assets/img/features/draas/5.png'),
                        selected: false,
                      },
                      {
                        id: 6,
                        name: 'Strategy and design',
                        description: 'DRPMéxico provides planning and design services in the cloud that leverage our environment assessment tool, which is used to model and ensure application performance requirements are met prior to DRaaS implementation.',
                        image: require('@/assets/img/features/draas/6.png'),
                        selected: false,
                      },
                      {
                        id: 7,
                        name: 'Onboarding and Implementation',
                        description: 'The journey to the cloud is as important as the destination. At DRPMéxico, he understands the importance and challenges of implementing DRaaS without interruptions. Not all companies have the internal resources or time to incorporate and implement DRaaS services efficiently.',
                        image: require('@/assets/img/features/draas/7.png'),
                        selected: false,
                      }
                    ]
                  },
                  benefits: {
                    title: 'Benefits',
                    list: [
                      {
                        id: 1,
                        name: 'Easy implementation',
                        image: require('@/assets/img/benefits/draas/1.svg'),
                      },
                      {
                        id: 2,
                        name: 'Transferencia segura de información',
                        image: require('@/assets/img/benefits/draas/2.svg'),
                      },
                      {
                        id: 3,
                        name: 'Quick recovery',
                        image: require('@/assets/img/benefits/draas/3.svg'),
                      },
                      {
                        id: 4,
                        name: 'Flexible RPO',
                        image: require('@/assets/img/benefits/draas/4.svg'),
                      },
                      {
                        id: 5,
                        name: 'Performance',
                        image: require('@/assets/img/benefits/draas/5.svg'),
                      },
                    ],
                  },
                  architecture: {
                    title: 'How it works?',
                    diagram: require('@/assets/img/architecture/draas/diagram.png'),
                  },
                  freeTrial: {
                    title: 'Free trial',
                    start: 'Start now!',
                    pros: [
                      'No credit card required',
                      'No charge, no risk, no hassle for 30 days',
                      'Guided setup and 24x7 support',
                    ]
                  }
                }
            },
            {
                id: 'iaas', 
                abbr: 'IaaS',
                name: 'Infrastructure as a Service',
                sub: `A cloud solution that's right for your most critical workloads`,
                tab: 'What is IaaS?',
                description: 'DRPMéxico IaaS provides the efficiency and scalability of traditional IaaS, but with a proven infrastructure based on VMware, designed by experts, guaranteeing integrated security and data protection. Get a familiar and consistent management experience across all environments, without the need to re-architect your workloads, allowing you to quickly migrate, run and secure your applications.',
                icon: require('@/assets/img/icons/iaas.svg'),
                lottie: require(`@/assets/lotties/infrastructure.json`),
                heroImage: require(`@/assets/img/misc/hero_iaas.jpg`),
                path: '/services/iaas',
                content: {
                  features: {
                    title: 'Features',
                    list: [
                      {
                        id: 1,
                        name: 'Industry leading technology',
                        description: 'It is a service that offers complete IT infrastructure, allowing companies computing functionalities, storage cabinets, connectivity and security elements.',
                        image: require('@/assets/img/features/iaas/1.png'),
                        selected: true,
                      },
                      {
                        id: 2,
                        name: 'Utilization levels',
                        description: `DRPMéxico's resources are purchased in blocks that align with the size of the server, providing the highest levels of utilization.`,
                        image: require('@/assets/img/features/iaas/2.png'),
                        selected: false,
                      },
                      {
                        id: 3,
                        name: 'Satisfaction of needs',
                        description: 'Dedicated servers to meet your most demanding application needs and unique licensing requirements.',
                        image: require('@/assets/img/features/iaas/3.png'),
                        selected: false,
                      },
                      {
                        id: 4,
                        name: 'Storage media',
                        description: `You can leverage the right storage media for your application's performance needs, from object storage to all-fash.`,
                        image: require('@/assets/img/features/iaas/4.png'),
                        selected: false,
                      },
                      {
                        id: 5,
                        name: 'Resource stability',
                        description: 'You can scale compute and storage resources independently, ensuring application performance and cost optimization.',
                        image: require('@/assets/img/features/iaas/5.png'),
                        selected: false,
                      },
                      {
                        id: 6,
                        name: 'Resilience N+1',
                        description: 'Built-in N+1 resilience model to ensure system availability in the event of component failure.',
                        image: require('@/assets/img/features/iaas/6.png'),
                        selected: false,
                      }
                    ]
                  },
                  benefits: {
                    title: 'Benefits',
                    list: [
                      {
                        id: 1,
                        name: 'Effectiveness',
                        image: require('@/assets/img/benefits/iaas/1.svg'),
                      },
                      {
                        id: 2,
                        name: 'Flexibility',
                        image: require('@/assets/img/benefits/iaas/2.svg'),
                      },
                      {
                        id: 3,
                        name: 'Security',
                        image: require('@/assets/img/benefits/iaas/3.svg'),
                      },
                    ],
                  },
                  architecture: {
                    title: 'How it works?',
                    diagram: require('@/assets/img/architecture/iaas/diagram.png'),
                  },
                  freeTrial: {
                    title: 'Free trial',
                    start: 'Start now!',
                    pros: [
                      'No credit card required',
                      'No charge, no risk, no hassle for 30 days',
                      'Guided setup and 24x7 support',
                    ]
                  }
                }
            },
            {
              id: 'm365', 
              abbr: 'M365',
              name: 'Microsoft 365 Backup',
              sub: `A cloud solution that's right for your most critical workloads`,
              tab: 'What is M365?',
              description: `Microsoft 365 has changed productivity in the workplace forever. But it wasn't designed with data protection in mind. As a result, Microsoft 365 provides only limited retention and protection capabilities.`,
              icon: require('@/assets/img/icons/m365.svg'),
              lottie: require(`@/assets/lotties/backup.json`),
              heroImage: require(`@/assets/img/misc/hero_m365.jpg`),
              path: '/services/m365',
              content: {
                features: {
                  title: 'Features',
                  list: [
                    {
                      id: 1,
                      name: 'Industry leading technology',
                      description: 'Automatic protection of critical Microsoft 365 data, including Exchange Online, SharePoint Online, OneDrive for Business, and Microsoft Teams.',
                      image: require('@/assets/img/features/m365/1.png'),
                      selected: true,
                    },
                    {
                      id: 2,
                      name: 'Simple pricing',
                      description: `We've made Veeam Backup for Office365 as simple as possible. You only pay a low fee per user and storage, nothing more.`,
                      image: require('@/assets/img/features/m365/2.png'),
                      selected: false,
                    },
                    {
                      id: 3,
                      name: 'Full integration with Veam',
                      description: 'When you run Veeam Availability Suite on your local private cloud, you can now select DRPMéxico as the destination for your offsite backups.',
                      image: require('@/assets/img/features/m365/3.png'),
                      selected: false,
                    },
                    {
                      id: 4,
                      name: 'Setup in minutes',
                      description: 'Within a few minutes of registering with DRPMéxico, you will be able to use its service. Customize the amount of storage you want, and then start backing up. No wait.',
                      image: require('@/assets/img/features/m365/4.png'),
                      selected: false,
                    },
                    {
                      id: 5,
                      name: 'No data transfer charges',
                      description: 'Use DRPMéxico as your Veeam Backup provider and you will not incur any data transfer charges from us. Backup and restore as much as you want.',
                      image: require('@/assets/img/features/m365/5.png'),
                      selected: false,
                    },
                  ]
                },
                benefits: {
                  title: 'Benefits',
                  list: [
                    {
                      id: 1,
                      name: 'Accidental deletion or corruption of information',
                      image: require('@/assets/img/benefits/m365/1.svg'),
                    },
                    {
                      id: 2,
                      name: 'Internal and external threats',
                      image: require('@/assets/img/benefits/m365/2.svg'),
                    },
                    {
                      id: 3,
                      name: 'Legal compliance and retention gaps',
                      image: require('@/assets/img/benefits/m365/3.svg'),
                    },
                  ],
                },
                architecture: {
                  title: 'How it works?',
                  diagram: require('@/assets/img/architecture/m365/diagram.png'),
                },
                freeTrial: {
                  title: 'Free trial',
                  start: 'Start now!',
                  pros: [
                    'No credit card required',
                    'No charge, no risk, no hassle for 30 days',
                    'Guided setup and 24x7 support',
                  ]
                }
              }
          },
          ],
          cta1: {
            sub: 'Our difference',
            title: 'Move to the trusted cloud',
            description: `DRPMéxico offers the most advanced network and infrastructure solutions available in the current market, providing our clients with a single platform to offer cloud, connectivity and security.`
          },
          successStories: [
            {
              id: 'carnesViba',
              customer: 'Carnes ViBa',
              description: 'Our Client unfortunately suffered a ransomware attack, but thanks to our solutions we were able to prevent them from paying millions of ransoms, giving them their data and giving them back their operation through our BaaS services with Veeam Backup.',
              link: 'https://www.veeam.com/success-stories/carnesviba.html',
              image: require('@/assets/img/customers/carnes_viba.png'),

            },
            {
              id: 'upSivale',
              customer: 'UP Si Vale',
              description: 'He was able to improve his backup policy by applying the 3,2,1 rule by taking his replicas to the cloud and enabling his Disaster Recovery Plan in his most critical services. Thus, they achieved high availability of data and services, additionally saving 30% speed in their primary storage, improving backup times and increasing restoration times by 10x.',
              link: 'https://www.veeam.com/es-lat/success-stories/si-vale.html',
              image: require('@/assets/img/customers/up_sivale.png')
            }
          ],
          customers: [
            {
              name: 'PegaDuro',
              logo: require('@/assets/img/customers/pegaduro.png'),
            },
            {
              name: 'HINO',
              logo: require('@/assets/img/customers/hino.png'),
            },
            {
              name: 'San Pablo Farmacia',
              logo: require('@/assets/img/customers/san_pablo.png'),
            },
            {
              name: 'Infra del sur',
              logo: require('@/assets/img/customers/infra_delsur.png'),
            },
            {
              name: 'Farmacias Similares',
              logo: require('@/assets/img/customers/similares.png'),
            },
            {
              name: 'Carnes Viba',
              logo: require('@/assets/img/customers/carnes_viba.png'),
            },
            {
              name: 'UP Sí Vale',
              logo: require('@/assets/img/customers/up_sivale.png'),
            }
          ],
        },
        services: {
          title: `<span class="d-block text-primary text-display-5 text-semi-heavy">DRP</span> Solutions`,
          description: `
            Do you already know our portfolio of services? <br>
            Guarantee the security and availability of your <br>
            information with cloud solutions that <br>
            DRPMéxico has for YOU!
          `,
        },
        aboutUs: {
          ctaTitle: `Cloud, Connectivity and Security with <span class="text-primary">DRP</span>Mexico.`,
          ctaDescription: 'We focus on simplifying each step of your journey to the Cloud. We accompany you at each stage of your implementation in the cloud, with 24/7 support to ensure that your business expectations are met.',
          whatIs: 'What is DRP México?',
          focusDrp: 'The DRP Mexico approach',
          focusItems: [
            {
              id: 1,
              icon: require('@/assets/img/icons/circle_check.svg'),
              title: 'APPROVED TECHNOLOGY',
              description: 'When performance and security are critical, the underlying technology matters. For this reason, DRPMéxico was built from the ground up with proven technology from VMware, Cisco and others.',
            },
            {
              id: 2,
              icon: require('@/assets/img/icons/shield.svg'),
              title: 'INTEGRATED SECURITY',
              description: 'The security approach ensures that data is protected at multiple levels, including physical security, logical security, process, and third-party certifications.',
            },
            {
              id: 3,
              icon: require('@/assets/img/icons/cog_clock.svg'),
              title: 'GLOBAL COMPLIANCE',
              description: 'To support our clients, DRPMéxico maintains a dedicated team of experts to consult on individual geographic and industry requirements, as well as a variety of certifications and attestations.',
            },
            {
              id: 4,
              icon: require('@/assets/img/icons/support_message.svg'),
              title: '24/7 SUPPORT',
              description: 'Before, during and after your cloud implementation, DRPMéxico is ready with 24×7 support to ensure your business and application expectations are met.',
            }
          ],
        },
        contact: {
          followUs: 'Follow us',
          phone: '+52 (55) 89 95 54 00',
          address: {
            mapUrl: 'https://goo.gl/maps/49jgNx6UsYz7bDuU9',
            street: 'López Mateos Sur 7000, Tlajomulco de Zúñiga, Mexico'
          },
          email: 'sales@drpmexico.com',
          links: [
            {
              icon: require('@/assets/img/social_nets/facebook.png'),
              name: 'drpmexico',
              url: 'https://www.facebook.com/drpmexico/',
            },
            {
              icon: require('@/assets/img/social_nets/instagram.png'),
              name: '@drp_mexico',
              url: 'https://www.instagram.com/drp_mexico/',
            },
            {
              icon: require('@/assets/img/social_nets/linkedin.png'),
              name: 'drpmexico',
              url: 'https://www.linkedin.com/company/drpmexico/',
            },
            {
              icon: require('@/assets/img/social_nets/twitter.png'),
              name: 'drpmexico',
              url: 'https://twitter.com/drpmexico',
            },
          ],
          form: {
            cta: 'Leave us a note',
            ctaSub: 'Potential or existing clients, we are here to answer or solve your doubts.',
            thank: 'Thank you!',
            thanksub: 'We will contact you shortly',
            title: 'Fill out the form and we will contact you right away',
            isLoading: 'Loading',
            successMessage: 'We received your message, we will contact you shortly!',
            failMessage: 'There was an error sending the message, try again',
            recaptchaUncheked: 'Confirm that you are not a robot',
            fields: {
              name: 'Name',
              company: 'Company',
              position: 'Position',
              phone: 'Phone',
              mail: 'Email',
              message: 'Message',
              submit: 'Send',
            }
          },
        },
        notFound: {
          message: `Looks like you are lost. Don't worry, you can always`,
          goBack: 'Go back home'
        }
      },
    }
  },
  mutations: {
    setAppLang(state, lang){
      state.app.lang = lang
      // save in local-storage
      localStorage.setItem('drp.app.lang', lang)
    }
  },
  actions: {
  },
  modules: {
  }
})
