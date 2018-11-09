import { MendelpedePede } from './mendelpede-pede.interface';
import { _User } from './user.interface';

/**
 * A user/scenario fridge
 */
export interface MendelpedeFridge {
  /**
   * Has access already been granted for this user/scenario;
   * Fridges for each scenario are the same when access not granted
   */
  accessGranted: boolean;
  /**
   * User id for owner of this fridge
   */
  userId: number;
  /**
   * Scenario id this fridge belongs to
   */
  mendelpedeScenCode: string;

  pedes: MendelpedePede[];

  genoFacts: string;
  
}

/**
 * Fridge information used by admin
 
export interface StudentFridge {
  /**
   * Owner of the fridge
   
  owner: _User;
  /**
   * Scenario this fridge is for
   
  scenario: {scenCode: string, label: string};
  /**
   * If fridge exists, the list of phage that are in this fridge
   
  strains?: StudentPhage[];
  /**
   * If the fridge exists, has access been granted for this user/scenario
   
  accessGranted?: boolean;
  /**
   * If the fridge exists, the deletion guesses by the student
   
  guesses?: string;
}
*/