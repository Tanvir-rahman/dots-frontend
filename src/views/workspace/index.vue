<template>
  <div>
    <el-row type="flex" justify="center" class="spacer">
      <el-col :span="12">
        <h2>Workspace Details</h2>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="spacer">
      <el-col :span="12">
        <h-card>
          <div slot="items">
            <h-form
              ref="workspaceDetailsForm"
              label-position="left"
              label-width="160px"
              :rules="rules"
              :model="workspaceDetailsForm"
            >
              <el-form-item :label="$t('workspace.workspaceName')" prop="name">
                <h-input v-model="workspaceDetailsForm.name" :placeholder="$t('workspace.myWorkspace')" />
                <span
                  v-if="workspaceDetailsForm.name"
                  class="info url-hint"
                >{{ $t('workspace.urlHint', { name: slug }) }}</span>
              </el-form-item>
              <el-form-item :label="$t('workspace.workspaceEmail')" prop="email">
                <h-input v-model="workspaceDetailsForm.email" placeholder="info@my-workspace.com" />
              </el-form-item>
              <el-form-item label="Description">
                <input-text-area v-model="workspaceDetailsForm.description" />
              </el-form-item>
              <el-form-item :label="$t('workspace.website')">
                <h-label-input v-model="workspaceDetailsForm.website" />
              </el-form-item>
              <el-form-item :label="$t('workspace.location')">
                <h-label-input v-model="workspaceDetailsForm.location" />
              </el-form-item>
              <div class="buttons">
                <h-button size="medium" type="primary" class="body-bold button-style">Save</h-button>
              </div>
            </h-form>
          </div>
        </h-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="spacer">
      <el-col :span="12">
        <h-card class="card-danger">
          <div slot="items">
            <el-row class="mb-20">
              <el-col
                :span="18"
              >Renaming the workspace will cause changes to your WorkspaceDetails URL</el-col>
              <el-col :span="6" class="text-right">
                <h-button size="medium" type="danger">Rename workspace</h-button>
              </el-col>
            </el-row>
            <el-row class="mb-20">
              <el-col
                :span="18"
              >Once you leave your workspace you will no longer have access to this Workspace. However any other Workspace you are in will not be affected.</el-col>
              <el-col :span="6" class="text-right">
                <h-button size="medium" type="danger">Leave workspace</h-button>
              </el-col>
            </el-row>
            <el-row class="mb-20">
              <el-col
                :span="18"
              >Once you transfer your ownership, your role will be changed to Admin by default.</el-col>
              <el-col :span="6" class="text-right">
                <h-button size="medium" type="danger">Transfer ownership</h-button>
              </el-col>
            </el-row>
          </div>
        </h-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'WorkspaceDetails',
  data: function() {
    return {
      show: false,
      addWorkspaceTitle: this.$t('workspace.addWorkspace'),
      workspaceDetailsForm: {
        name: '',
        email: '',
        description: '',
        website: '',
        location: '',
        slug: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$t('general.requiredField'),
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: this.$t('general.requiredField'),
            trigger: 'blur'
          },
          {
            validator: this.isValidEmail,
            trigger: 'blur'
          }
        ]
      },
      hintName: '',
      creatingWorkspace: false
    }
  }
}
</script>
<style >
.card-danger {
  border-color: red !important;
}

.mb-20 {
  margin-bottom: 20px;
}

.text-right {
  text-align: right;
}
</style>
