  <ol class="breadcrumb">
    <li>Controller</li>
  <li>Fridge Controller</li>
</ol>
  <p class="comment">
    <h3>Description</h3>
  </p>
  <p class="comment">
    The Fridge-related controller functions
  </p>
<section>
  <h3 id="index">Index</h3>
  <table class="table table-sm table-bordered index-table">
    <tbody>
      <tr>
        <td class="col-md-4">
          <ul class="index-list">
<li>
                <a href="#module_Fridge Controller.stockFridge">stockFridge</a>
              </li>
<li>
                <a href="#module_Fridge Controller.getFridge">getFridge</a>
              </li>
<li>
                <a href="#module_Fridge Controller.getStudentFridge">getStudentFridge</a>
              </li>
<li>
                <a href="#module_Fridge Controller.saveDeletions">saveDeletions</a>
              </li>
<li>
                <a href="#module_Fridge Controller.deleteStudentFridge">deleteStudentFridge</a>
              </li>
<li>
                <a href="#module_Fridge Controller.addPhageToFridge">addPhageToFridge</a>
              </li>
<li>
                <a href="#module_Fridge Controller.updatePhage">updatePhage</a>
              </li>
<li>
                <a href="#module_Fridge Controller.deletePhage">deletePhage</a>
              </li>
<li>
                <a href="#module_Fridge Controller.phageById">phageById</a>
              </li>
<li>
                <a href="#module_Fridge Controller.findFridgeByScenOwner">findFridgeByScenOwner</a>
              </li>
<li>
                <a href="#module_Fridge Controller.hasFridgeAuthorization">hasFridgeAuthorization</a>
              </li>
<li>
                <a href="#module_Fridge Controller.hasPhageAuthorization">hasPhageAuthorization</a>
              </li>
<li>
                <a href="#module_Fridge Controller..getFridgeInfo">getFridgeInfo</a>
              </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.stockFridge"></a>
    <h3 id=stockFridge>stockFridge</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>stockFridge(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/cricket/:userId/:scenarioId/new-fridge</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Create a new fridge stocked with the scenario phage</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>current scenario from <a href="@link scenario.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>400 Bad Request</code></td><td><p>Error creating phage for this fridge, sends error as <code>{message: &#39;Unable to create new phage for scenario&#39;}</code></p>
</td>
    </tr><tr>
    <td><code>500 Internal Server Error</code></td><td><p>Error saving the new fridge, sends error as <code>{message: &#39;Unable to save new fridge&#39;}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>Newly created fridge cleaned by <a href="#getFridgeInfo">getFridgeInfo</a></p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.getFridge"></a>
    <h3 id=getFridge>getFridge</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>getFridge(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/cricket/:userId/:scenarioId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Get the current user's fridge
Only include info needed to be known for lab room, plexer room, and model room of scenario</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>current scenario from <a href="@link scenario.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>500 Internal Server Error</code></td><td><p>On server/database error send description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>User&#39;s fridge for this scenario cleaned by <a href="#getFridgeInfo">getFridgeInfo</a></p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.getStudentFridge"></a>
    <h3 id=getStudentFridge>getStudentFridge</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>getStudentFridge(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#0F6AB4;margin-right:10px;">GET</span>

    <code>/api/admin/:userId/students/:studentId/:scenarioId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Get a user's fridge and include lots of details only
admin/instrs should know</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>student</td><td><code>User</code></td><td><p>student of interest from <a href="user.html#userById">userById</a> with id <code>studentId</code></p>
</td>
      </tr><tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>current scenario from <a href="@link scenario.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>500 Internal Server Error</code></td><td><p>On server/database error send description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>If fridge doesn&#39;t exist, return owner/scenario as if the fridge exists (information needed for front-end rendering)</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.saveDeletions"></a>
    <h3 id=saveDeletions>saveDeletions</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>saveDeletions(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>

    <code>/api/cricket/:userId/:scenarioId/deletions</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Update the deletion guesses for the fridge
guesses come in as object and are stringified when saving</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>current scenario from <a href="@link scenario.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr><tr>
      <td>fridge</td><td><code>Fridge</code></td><td><p>logged in users&#39;s fridge for this scenario from <a href="#findFidgeByScenOwner">findFridgeByScenOwner</a></p>
</td>
      </tr><tr>
      <td>body</td><td><code>Object</code></td><td><p>updated guesses to save</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>500 Internal Server Error</code></td><td><p>On server/database error send description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>returns stringified updated guesses to response</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.deleteStudentFridge"></a>
    <h3 class="text-info" id=deleteStudentFridge>deleteStudentFridge</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>deleteStudentFridge(req, res, next) ⇒ <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
    <code>/api/admin/:userId/students/:studentId/:scenarioId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Middleware which deletes a fridge and all phage within the fridge
Called after granting access because new fridge
needs to be created for the user/scenario</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr><tr>
        <td>next</td><td><code>function</code></td><td><p>next function to go to</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>student</td><td><code>User</code></td><td><p>student of interest from <a href="user.html#userById">userById</a> with id <code>studentId</code></p>
</td>
      </tr><tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>current scenario from <a href="@link scenario.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>function</code> - - go to next middleware  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>next()</code></td><td><p>If successful, delete the fridge and all phage in the fridge, then go to next middleware</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.addPhageToFridge"></a>
    <h3 id=addPhageToFridge>addPhageToFridge</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>addPhageToFridge(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>

    <code>/api/cricket/:userId/:scenarioId/fridge-phage</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Create new phage with phage type "user", save that to DB, and add to the current fridge</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>current scenario from <a href="@link scenario.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr><tr>
      <td>fridge</td><td><code>Fridge</code></td><td><p>logged in users&#39;s fridge for this scenario from <a href="#findFidgeByScenOwner">findFridgeByScenOwner</a></p>
</td>
      </tr><tr>
      <td>body</td><td><code>Object</code></td><td><p>information about new strain; has properties</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>400 Bade Request</code></td><td><p>On error creating new phage, sends description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>500 Internal Server Error</code></td><td><p>On error adding phage to fridge, sends description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>Information about the newly added strain, including info about phage parents (fetch from DB)</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.updatePhage"></a>
    <h3 id=updatePhage>updatePhage</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>updatePhage(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#10a54a;margin-right:10px;">POST</span>

    <code>/api/cricket/:userId/:scenarioId/:phageId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Update the comment or submitted state of a phage</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>strain</td><td><code>Phage</code></td><td><p>phage strain from <a href="#phageById">phageById</a> with id <code>phageId</code></p>
</td>
      </tr><tr>
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>current scenario from <a href="@link scenario.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr><tr>
      <td>body</td><td><code>Object</code></td><td><p>updated strain info; has <code>comment</code>, <code>strainNum</code>, and <code>submitted</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>400 Bad Request</code></td><td><p>On error, sends description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>return updated phage with information about phage parents (from DB)</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.deletePhage"></a>
    <h3 id=deletePhage>deletePhage</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>deletePhage(req, res) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">    <span class="modifier" style="background:#A41E22;margin-right:10px;">DELETE</span>

    <code>/api/cricket/:userId/:scenarioId/:phageId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Delete a phage strain and remove it from the fridge</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>strain</td><td><code>Phage</code></td><td><p>phage strain from <a href="#phageById">phageById</a> with id <code>phageId</code></p>
</td>
      </tr><tr>
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>current scenario from <a href="@link scenario.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr><tr>
      <td>fridge</td><td><code>Fridge</code></td><td><p>logged in users&#39;s fridge for this scenario from <a href="#findFidgeByScenOwner">findFridgeByScenOwner</a></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - json object to response  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>400 Bad Request</code></td><td><p>On error deleting phage, sends description of error as <code>{message: error-message}</code></p>
</td>
    </tr><tr>
    <td><code>500 Internal Server Error</code></td><td><p>On error removing phage from fridge, sends error as <code>{message: &quot;Unable to remove strain from fridge&quot;}</code></p>
</td>
    </tr><tr>
    <td><code>200 OK</code></td><td><p>return the newly deleeted phage strain</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.phageById"></a>
    <h3 class="text-info" id=phageById>phageById</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>phageById(req, res, next, id) ⇒ <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
    <code>:phageId</code>
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Middleware which identifies a phage strain based on the
id</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr><tr>
        <td>next</td><td><code>function</code></td><td><p>next middleware function</p>
</td>
      </tr><tr>
        <td>id</td><td><code>string</code></td><td><p>mongoDB id of phage strain to look for</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>function</code> - - go to the next middleware  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>next(error)</code></td><td><p>If error, pass error to next middleware</p>
</td>
    </tr><tr>
    <td><code>next(&#x27;Phage not found&#x27;)</code></td><td><p>If phage doesn&#39;t exist, pass message to next middleware</p>
</td>
    </tr><tr>
    <td><code>next()</code></td><td><p>If successful, set request <code>strain</code> and go to next middleware</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.findFridgeByScenOwner"></a>
    <h3 class="text-info" id=findFridgeByScenOwner>findFridgeByScenOwner</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>findFridgeByScenOwner(req, next) ⇒ <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
</td>
        </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Middleware to find a fridge by the current user and current scenario
user and scenario were set in previous middleware</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object</p>
</td>
      </tr><tr>
        <td>next</td><td><code>function</code></td><td><p>next middleware function</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>current scenario from <a href="@link scenario.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>function</code> - - go to next middleware  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>next(error)</code></td><td><p>If error, pass error to next middleware</p>
</td>
    </tr><tr>
    <td><code>next(&#x27;Failed to find fridge&#x27;)</code></td><td><p>If fridge doesn&#39;t exist, pass message to next middleware</p>
</td>
    </tr><tr>
    <td><code>next()</code></td><td><p>If successful, set request <code>fridge</code> and go to next middleware</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.hasFridgeAuthorization"></a>
    <h3 class="text-info" id=hasFridgeAuthorization>hasFridgeAuthorization</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>hasFridgeAuthorization(req, res, next) ⇒ <code>Object</code> \| <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Middleware to check if current user is fridge owner</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object;</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express response object</p>
</td>
      </tr><tr>
        <td>next</td><td><code>function</code></td><td><p>next middleware function</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>scenario</td><td><code>Scenario</code></td><td><p>current scenario from <a href="@link scenario.html#scenarioByCode">scenarioByCode</a> with scenCode <code>scenarioId</code></p>
</td>
      </tr><tr>
      <td>fridge</td><td><code>Fridge</code></td><td><p>logged in users&#39;s fridge for this scenario from <a href="#findFidgeByScenOwner">findFridgeByScenOwner</a></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> \| <code>function</code> - - If not authorized, return json object with error to response otherwise go to next middleware  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>403 Forbidden</code></td><td><p>If current user isn&#39;t owner, send error as <code>{message: &#39;User is not authorized&#39;}</code></p>
</td>
    </tr><tr>
    <td><code>next()</code></td><td><p>If authorized, go to next middleware</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller.hasPhageAuthorization"></a>
    <h3 class="text-info" id=hasPhageAuthorization>hasPhageAuthorization</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>hasPhageAuthorization(req, res, next) ⇒ <code>Object</code> \| <code>function</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Middleware to determine if current user has authorization to
update a phage strain</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>req</td><td><code>Object</code></td><td><p>Express request object;</p>
</td>
      </tr><tr>
        <td>res</td><td><code>Object</code></td><td><p>Express responses object</p>
</td>
      </tr><tr>
        <td>next</td><td><code>function</code></td><td><p>next middleware function</p>
</td>
      </tr>  </tbody>
</table>

</div>
              <div class="io-description">
                <b>Request Parameters :</b> <table class="table table-condensed">
  <thead>
    <tr>
        <th>Param</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>curUser</td><td><code>User</code></td><td><p>logged in user from <a href="user.html#userById">userById</a> with id <code>userId</code></p>
</td>
      </tr><tr>
      <td>strain</td><td><code>Phage</code></td><td><p>phage strain from <a href="#phageById">phageById</a> with id <code>phageId</code></p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> \| <code>function</code> - - If not authorized, return json object with error to response otherwise go to next middleware  
</div>
              <div class="io-description"><b>Response :</b><table class="params">
  <thead>
    <tr>
      <td>Status</td><td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><code>403 Forbidden</code></td><td><p>If current user isn&#39;t owner, send error as <code>{message: &#39;User is not authorized&#39;}</code></p>
</td>
    </tr><tr>
    <td><code>next()</code></td><td><p>If authorized, go to next middleware</p>
</td>
    </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
  <section>
  <a name="module_Fridge Controller..getFridgeInfo"></a>
    <h3 id=getFridgeInfo>getFridgeInfo</h3>
  <table class="table table-sm table-bordered">
    <tbody>
      <tr>
        <td class="col-md-4"><code>getFridgeInfo(fridge) ⇒ <code>Object</code></code></td>
      </tr>
        <tr>
          <td class="col-md-4">
            <div class="io-description">Helper method to return fridge details in consistent
format</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description">
                <b>Parameters :</b> <table class="params">
  <thead>
    <tr>
        <td>Param</td>
        <td>Type</td>
        <td>Description</td>
    </tr>
  </thead>
  <tbody>
<tr>
        <td>fridge</td><td><code>Object</code></td><td><p>fridge object from DB</p>
</td>
      </tr>  </tbody>
</table>

</div>
          </td>
        </tr>
        <tr>
          <td class="col-md-4">
              <div class="io-description"><b>Returns : </b> <code>Object</code> - - cleaned up fridge object with properties
`scenarioDetails`, `guesses`, `accessGranted`, `userId`, `scenCode`, and `strains`
Each strain of `strains` has `comment`, `id`, `parents`, `strainNum`, `phageType`, `submitted`, and `numParents`  
</div>
          </td>
        </tr>
    </tbody>
  </table>
</section>
<section style="margin-top:50px;text-align:center;">
documentation generated with <a href="https://github.com/jsdoc2md/jsdoc-to-markdown/">JSDoc2md</a>
</section>