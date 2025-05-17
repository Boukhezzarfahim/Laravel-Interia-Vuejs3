<template>
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">Liste de tous les niveaux scolaires</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title"></h3>
              <div class="card-tools">
                <ul class="pagination pagination-sm float-right mb-0">
                  <li
                    class="page-item"
                    v-for="(link, index) in props.niveauScolaires.links"
                    :key="index"
                    :class="{ 'disabled': !link.url, 'active': link.active }"
                  >
                    <Link
                      class="page-link"
                      :href="link.url ?? '#'"
                      v-html="link.label"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div class="card-body p-0">
              <table class="table">
                <thead>
                  <tr>
                    <th>Niveau scolaire</th>
                    <th style="width: 100px">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="niveauScolaire in props.niveauScolaires.data" :key="niveauScolaire.id">
                    <td>{{ niveauScolaire.nom }}</td>
                    <td>
                      <div class="d-flex justify-content-start">
                        <button class="btn btn-info btn-sm mr-2"><i class="fas fa-pen"></i></button>
                        <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="props.niveauScolaires.data.length === 0">
                    <td colspan="2" class="text-center">Aucun niveau scolaire trouvé.</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  niveauScolaires: Object
})
</script>
