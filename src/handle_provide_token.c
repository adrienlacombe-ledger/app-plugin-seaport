#include "seaport_plugin.h"

// EDIT THIS: Adapt this function to your needs! Remember, the information for
// tokens are held in `msg->item1` and `msg->item2`. If those pointers are
// `NULL`, this means the ethereum app didn't find any info regarding the
// requested tokens!

void handle_provide_token(void *parameters) {
  ethPluginProvideInfo_t *msg = (ethPluginProvideInfo_t *)parameters;
  context_t *context = (context_t *)msg->pluginContext;

  if (msg->item1)
    context->booleans |= ITEM1_FOUND;
  // check if not ETH address
  else if (memcmp(context->token1_address, NULL_ADDRESS, ADDRESS_LENGTH)) {
    context->screen_array |= SEND_UI_ERR;
    msg->additionalScreens++;
  }

  if (msg->item2)
    context->booleans |= ITEM2_FOUND;
  // check if not ETH address
  else if (memcmp(context->token2_address, NULL_ADDRESS, ADDRESS_LENGTH)) {
    context->screen_array |= RECEIVE_UI_ERR;
    msg->additionalScreens++;
  }

  msg->result = ETH_PLUGIN_RESULT_OK;
}
