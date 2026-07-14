import { websiteConfig } from './config/website';

export enum Routes {
  Root = '/',
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  Guides = '/guides',
  BeginnerGuide = '/guides/beginner-guide',
  ProductionLabor = '/guides/production-and-labor',
  FoodShortages = '/guides/food-and-shortages',
  TownsLogistics = '/guides/towns-and-logistics',
  AgentsUpgrades = '/guides/agents-and-upgrades',
  TradeSmuggling = '/guides/trade-and-smuggling',
  SocialClasses = '/guides/social-classes',
  TraitsUnrestDisease = '/guides/traits-unrest-and-disease',
  ResourcesProductionChains = '/guides/resources-and-production-chains',
  ExplorationColonization = '/guides/exploration-and-colonization',
  BattlesRegiments = '/guides/battles-and-regiments',
  ShipsSeafaring = '/guides/ships-and-seafaring',
  DiplomacyGrudge = '/guides/diplomacy-and-grudge',
  FactionsMapsReplayability = '/guides/factions-maps-and-replayability',
  MultiplayerPlatforms = '/guides/multiplayer-and-platforms',
  ResearchBooksArt = '/guides/research-books-and-art',
  DisbandUnitsStatus = '/guides/disband-units-status',
  SystemRequirements = '/system-requirements',
  Review = '/review',
  Download = '/download',

  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',
  Payment = '/payment',
}

export const routesNotAllowedByLoggedInUsers: Routes[] = [];
export const protectedRoutes: Routes[] = [];
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Dashboard;
