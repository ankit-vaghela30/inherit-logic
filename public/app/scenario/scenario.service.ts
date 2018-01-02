//import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Scenario } from '../interfaces/scenario.interface';
import { Fridge } from '../interfaces/fridge.interface';
import { FridgePhage, GenotypePhage } from '../interfaces/phage.interface';


@Injectable()
export class ScenarioService {
    private _baseURL = 'api/cricket';
    private _scenarioDetails = new BehaviorSubject<string>('');
    getScenarioDetails = this._scenarioDetails.asObservable();
    private _scenarioGuesses = new BehaviorSubject<any>({});
    getGuesses = this._scenarioGuesses.asObservable();
    private _scenarioCode = new BehaviorSubject<string>('');
    getScenarioCode = this._scenarioCode.asObservable();


    constructor(private _http: HttpClient) {
    }

    listScenarios(): Observable<any> {
        return this._http
            .get(this._baseURL)
    }

    getScenario(scenId: string): Observable<Scenario> {
        this._scenarioCode.next(scenId);
        return this._http
            .get<Scenario>(`${this._baseURL}/${scenId}`);
    }

    resetScenario() {
        this._scenarioDetails.next('');
        this._scenarioGuesses.next({});
        this._scenarioCode.next('');
    }

    setScenario(scenarioDetails: string, scenarioGuesses: string) {
        if (scenarioDetails !== null)
            this._scenarioDetails.next(scenarioDetails);
        if (scenarioDetails !== null)
            this._scenarioGuesses
              .next(JSON.parse(scenarioGuesses));
    }

    saveDeletions(guesses: any, userId: number, scenId: string): Observable<any> {
        return this._http
            .post(`${this._baseURL}/${userId}/${scenId}/deletions`, guesses);
    }

    createFridge(userId: number, scenId: string): Observable<Fridge> {
        return this._http.get<Fridge>(`${this._baseURL}/${userId}/${scenId}/new-fridge`);
    }

    getFridge(userId: number, scenId: string): Observable<Fridge> {
        var res = this._http
            .get<Fridge>(`${this._baseURL}/${userId}/${scenId}`);
        return res;
    }

    saveFridge(fridge: any): Observable<any> {
        let userId = fridge.owner.userId;
        let scenCode = fridge.scenario.scenCode;
        return this._http
            .post(`${this._baseURL}/${userId}/${scenCode}`, fridge)
        //.map((res: Response) => res.json())
        //.catch(this.handleError);
    }

    addStrain(strain: any, userId: number, scenCode: string): Observable<FridgePhage> {
        // strains has strainNum, mutationList, deletion
        // returns new phage
        return this._http
            .post<FridgePhage>(`${this._baseURL}/${userId}/${scenCode}/fridge-phage`, strain)
        //.map((res: Response) => res.json())
        //.catch(this.handleError);
    }

    updateStrain(strain: FridgePhage, userId: number, scenCode: string): Observable<FridgePhage> {
        let strainId = strain.id;
        return this._http
            .post<FridgePhage>(`${this._baseURL}/${userId}/${scenCode}/${strainId}`, strain)
    }

    deleteStrain(strain: FridgePhage, userId: number, scenCode: string): Observable<any> {
        let strainId = strain.id;
        return this._http
            .delete(`${this._baseURL}/${userId}/${scenCode}/${strainId}`)
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    /*private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }*/
}
